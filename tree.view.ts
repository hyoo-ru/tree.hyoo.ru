namespace $.$$ {

	export class $hyoo_tree extends $.$hyoo_tree {

		compile() {
			return this.$.$mol_state_arg.value( 'compile' ) === ''
		}

		pages() {
			return [
				this.Source() ,
				... this.compile() ? [ this.Result() ] : []
			]
		}

		@ $mol_mem
		compiled() {
			const data = this.source()
			const node = $mol_tree2.fromString( data , $mol_span.entire('view.tree', data.length) )

			return this.$.$mol_view_tree2_ts_compile( node )
		}

		result() {
			return ''
			+ '# view.tree.ts\n\n' + this.compiled().script.replace( /^/gm , '\t' ) + '\n'
			+ '# view.tree.locale=en.json\n\n' + JSON.stringify( this.compiled().locales , null , '\t' ).replace( /^/gm , '\t' )
		}

		source( next? : string ) {
			return this.$.$mol_state_arg.value( 'source' , next ) ?? this.$.$mol_fetch.text( 'hyoo/tree/tree.view.tree' )
		}

	}

}
