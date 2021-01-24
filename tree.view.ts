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
		result( index: number ): string | $mol_tree2 {
			
			const func = this.pipeline()[ index ]
			if( !func ) return ''

			return this.$[ func ](
				index ? this.result( index - 1 ) : this.source(),
				index ? undefined : $mol_span.entire( 'source1', this.source() )
			)

		}

		@ $mol_mem_key
		result_text( index: number ): string {
			const res = $mol_try( ()=> this.result( index ) )
			if( res instanceof Promise ) $mol_fail_hidden( res )
			if( typeof res === 'string' ) return res
			if( !Reflect.getPrototypeOf( Reflect.getPrototypeOf( res ) ) ) return JSON.stringify( res, null, '\t' )
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
