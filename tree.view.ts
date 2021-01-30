namespace $.$$ {

	export class $hyoo_tree extends $.$hyoo_tree {

		@ $mol_mem
		pipeline( next?: string[] ) {
			return ( this.$.$mol_state_arg.value( 'pipeline', next && next.join( '~' ) ) ?? '' ).split( '~' ).filter( Boolean )
		}

		@ $mol_mem
		pages() {
			return [
				this.Presets() ,
				this.Source() ,
				... this.pipeline().map( ( transform, index )=> this.Result( index ) ),
				this.Result( this.pipeline().length ),
			]
		}

		@ $mol_mem_key
		result_head( index: number ) {
			return [
				this.Transform( index ),
				... this.pipeline()[ index ] ? [ this.Close( index ) ] : [],
			]
		}

		@ $mol_mem
		source( next? : string ) {
			return this.$.$mol_state_arg.value( 'source' , next ) ?? ''
		}

		@ $mol_mem_key
		transform( index: number, next?: string ) {
			let pipeline = this.pipeline()
			if( next ) pipeline = this.pipeline([
				... pipeline.slice( 0, index ),
				next,
				... pipeline.slice( index + 1 ),
			])
			return pipeline[ index ] ?? null
		}

		@ $mol_mem_key
		result( index: number ): string | $mol_tree2 | Uint8Array | $mol_wasm_module {
			
			const func = this.pipeline()[ index ]
			if( !func ) return ''
			
			const arg = index ? this.result( index - 1 ) : this.source()

			if( $mol_func_is_class( this.$[ func ] ) ) {
				return new this.$[ func ]( arg ) ?? null
			} else {
				return this.$[ func ]( arg ) ?? null
			}

		}

		@ $mol_mem_key
		result_text( index: number ): string {
			let res = $mol_try( ()=> this.result( index ) )
			if( res instanceof Promise ) $mol_fail_hidden( res )
			if( typeof res === 'string' ) return res
			if( Object( res ) !== res ) return String( res )
			if( !Reflect.getPrototypeOf( Reflect.getPrototypeOf( res ) ) ) return JSON.stringify( res, null, '\t' )
			if( Array.isArray( res ) ) return JSON.stringify( res, null, '\t' )
			if( res instanceof $mol_wasm_module ) {
				res = new Uint8Array( res.buffer )
			}
			if( res instanceof Uint8Array ) {
				return `data:application/octet-stream;base64,${ $mol_base64_encode( res ) }`
			}
			return String( res )
		}

		close( index: number ) {
			this.pipeline([
				... this.pipeline().slice( 0, index ),
				... this.pipeline().slice( index + 1 ),
			])
		}

	}

}
