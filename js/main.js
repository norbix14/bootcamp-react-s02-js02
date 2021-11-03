document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')
	window.addEventListener('scroll', controlScroll)
	function controlScroll() {
		if (document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20) {
    	toTop.style.display = "block"
	  } else {
	    toTop.style.display = "none"
	  }
	}
	toTop.addEventListener('click', e => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})
	const ej01 = () => {
		const num = 10
		const cadena = ''
		const arr = []
		const arr2 = [10, true, 'foo']
		const obj = {}
		return [num, cadena, arr, arr2, obj]
	}
	const ej02 = () => {
		const nombre = 'norberto'
		return nombre
	}
	const ej03 = () => {
		const n1 = 10
		const n2 = 20
		return n1 + n2
	}
	const ej04 = () => {
		const nombre = 'norberto'
		return nombre
	}
	const ej05 = (nombre) => {
		return nombre
	}
	const ej06 = () => {
		const datos = 'foo'
		return datos.toUpperCase()
	}
	const ej07 = () => {
		const datos = 'FOO'
		return datos.toLowerCase()
	}
	const ej08 = () => {
		const info = 'lorem ipsum scammer'
		return info.split(' ')
	}
	const ej09 = () => {
		const arr = ['lorem', 'ipsum', 'scammer']
		return arr.join(' ')
	}
	const ej10 = () => {
		const arr = ['lorem', 'ipsum', 'scammer']
		return arr[0]
	}
	const ej11 = () => {
		const arr = ['lorem', 'ipsum', 'scammer']
		arr.push('simply')
		return arr
	}
	const ej12 = () => {
		const arr = ['lorem', 'ipsum', 'scammer', 'simply']
		arr.shift()
		return arr
	}
	const ej13 = () => {
		const arr = ['lorem', 'ipsum', 'scammer', 'simply', 'sit', 'amet', 'laboris', 'nisi']
		return arr.length
	}
	const ej14 = () => {
		const arr = ['lorem', 'ipsum', 'scammer', 'simply', 'laboris', 'sit', 'amet', 'laboris']
		const len = arr.length
		for (let i = 0; i < len; i++) {
			let palabra = arr[i]
			if (palabra === 'laboris') {
				arr[i] = palabra.toUpperCase()
			}
		}
		return arr
	}
	const ej15 = () => {
		const foo = 'qux'
		const res = foo.length % 2 === 0
		return res ? 'par' : 'impar'
	}
	const ej16 = () => {
		const a = 100
		const b = 200
		return a > b
	}
	const ej17 = () => {
		const edad = 20
		const res = edad >= 21
		switch (res) {
			case true:
				return true
			case false:
				return false
		}
	}
	const ej18 = () => {
		const arr = ['lorem', 'ipsum', 'lorem', 'scammer', 'simply', 'laboris', 'sit', 'amet', 'laboris']
		const len = arr.length
		for (let i = 0; i < len; i++) {
			let palabra = arr[i]
			for (let j = i + 1; j < len; j++) {
				if (arr[j] === palabra) {
					delete arr[j]
				}
			}
		}
		return arr
	}
	const ej19 = () => {
		const arr = ['lorem', 'ipsum', 'scammer', 'simply', 'laboris', 'sit', 'amet']
		const lens = []
		for (el of arr) {
			lens.push(el.length)
		}
		return lens
	}
	const ej20 = () => {
		const reporte = 'lorem ipsum scammer simply laboris sit amet'
		const len = reporte.length
		let vocales = 0
		let res = ''
		for (let i = 0; i < len; i++) {
			let letra = reporte[i]
			if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
				vocales += 1
			}
			if (i === 0) {
				res += letra.toUpperCase()
			} else if (letra === 'a') {
				res += 'x'
			} else if (['e', 'i', 'o', 'u'].includes(letra)) {
				res += letra.toUpperCase()
			} else if (i === len - 1) {
				res += '@'
			} else {
				res += letra
			}
		}
		return { res, vocales }
	}
	document.addEventListener('click', e => {
		const { target: { tagName, id } } = e
		if (tagName === 'BUTTON') {
			switch (id) {
				case 'ej01':
					return console.log(ej01())
				case 'ej02':
					return console.log(ej02())
				case 'ej03':
					return console.log(ej03())
				case 'ej04':
					return console.log(ej04())
				case 'ej05':
					return console.log(ej05('norberto'))
				case 'ej06':
					return console.log(ej06())
				case 'ej07':
					return console.log(ej07())
				case 'ej08':
					return console.log(ej08())
				case 'ej09':
					return console.log(ej09())
				case 'ej10':
					return console.log(ej10())
				case 'ej11':
					return console.log(ej11())
				case 'ej12':
					return console.log(ej12())
				case 'ej13':
					return console.log(ej13())
				case 'ej14':
					return console.log(ej14())
				case 'ej15':
					return console.log(ej15())
				case 'ej16':
					return console.log(ej16())
				case 'ej17':
					return console.log(ej17())
				case 'ej18':
					return console.log(ej18())
				case 'ej19':
					return console.log(ej19())
				case 'ej20':
					const { res, vocales } = ej20()
					return console.log([res, `total de vocales: ${vocales}`])
				default:
					console.log('ELEGIR EJERCICIO')
			}
		}
	})
})
