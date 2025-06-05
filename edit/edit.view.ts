namespace $.$$ {
	export class $hyoo_tree_edit extends $.$hyoo_tree_edit {
		
		@ $mol_mem
		value( next?: $mol_tree2 ) {
			return next ?? super.value()
		}
		
		sub() {
			return this.list([])
		}
		
		@ $mol_mem_key
		item_row( path: number[] ){
			return [
				... this.item_type( path )
				? [ this.Item_type( path ) ]
				: [ this.Item_value( path ) ], 
				this.Item_kind( path ),
				this.Item_born( path ),
				this.Item_delete( path ),
			]
		}
		
		@ $mol_mem_key
		item_kind( path: number[], next?: boolean ) {
			
			const prev_tree = this.value().select( ... path ).kids[0]
			const prev = ! prev_tree.type
			
			if( next === undefined ) return prev
			if( next === prev ) return prev
			
			const next_tree = next
				? $mol_tree2.data( prev_tree.type, prev_tree.kids )
				: $mol_tree2.struct( prev_tree.value, prev_tree.kids )
			
			this.value( this.value().insert( next_tree, ... path ) )
			return next
			
		}
		
		@ $mol_mem_key
		item_type( path: number[], next?: string ) {
			
			const prev = this.value().select( ... path ).kids[0]
			if( next === undefined ) return prev.type
			
			this.value( this.value().insert( $mol_tree2.struct( next, prev.kids ), ... path ) )
			return next
			
		}
		
		@ $mol_mem_key
		item_value( path: number[], next?: string ) {
			
			const prev = this.value().select( ... path ).kids[0]
			if( next === undefined ) return prev.value
			
			this.value( this.value().insert( $mol_tree2.data( next, prev.kids ), ... path ) )
			return next
			
		}
		
		@ $mol_mem_key
		item_delete_self( path: number[], event?: Event ) {
			this.value( this.value().update( this.value().select( ... path, null ).kids, ... path )[0] )
			this.Item_delete( path ).showed( false )
		}
		
		@ $mol_mem_key
		item_delete_tree( path: number[], event?: Event ) {
			this.value( this.value().insert( null, ... path ) )
			this.Item_delete( path ).showed( false )
		}
		
		@ $mol_mem_key
		item_born( path: number[], event?: Event ) {
			this.value( this.value().insert( $mol_tree2.data( '' ), ... path, Number.MAX_SAFE_INTEGER ) )
		}
		
		@ $mol_mem_key
		list( path: number[] ) {
			return this.value().select( ... path, null ).kids.map( ( _, i )=> this.Item([ ... path, i ]) )
		}
		
	}
}
