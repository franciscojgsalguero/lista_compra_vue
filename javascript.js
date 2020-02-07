const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Shopping List',
		productos: [
		],
		nombre: '',
		preu: 0,
		cantidad: 0,
		total: 0,
		total_producto: 0
	},
	methods: {
		agregarProducto () {
			this.productos.push({
				nombre: this.nombre , preu: this.preu, cantidad: 0, total_producto: this.preu * this.cantidad,
			});
			this.nombre = '';
			this.preu = 0;
		}
	},
	computed: {
		sumarproducto () {
			this.total = 0;
			for(producto of this.productos) {
				producto.total_producto = producto.preu * producto.cantidad;
			}
			this.sumarProductos;
			this.total = 0;

			return producto.total_producto;
		},
		sumarProductos () {
				this.total = 0;
				for(producto of this.productos) {
					this.total = this.total + producto.preu;
				}

				return this.total;
		},
		eliminar () {
			this.productos.pop();
		}
	},
})