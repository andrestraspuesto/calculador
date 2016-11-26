import {Cuenta} from './app.sheet.cuenta'

export const BALANCE: Cuenta[] = [
	{
		id:1,
		descripcion: 'ACTIVO',
		valor: '',
		desglose: [
			{
				id: 1,
				descripcion: 'Activo No Corriente',
				valor: '',
				desglose: [
					{
						id: 1,
						descripcion: 'Inmovilizado Intangible',
						valor: '',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Inmovilizado Material',
						valor: '',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Inversiones Inmobiliarias.',
						valor: '',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Inversiones en empresas del grupo y asociadas a largo plazo',
						valor: '',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Inversiones financieras a largo plazo',
						valor: '',
						desglose: []
					},
					{
						id: 6,
						descripcion: 'Activos por impuesto diferidos',
						valor: '',
						desglose: []
					}

				]
			},
			{
				id: 2,
				descripcion: 'Activo Corriente',
				valor: '',
				desglose: [
					{
						id: 1,
						descripcion: 'Activos no corrientes mantenidos para la venta.',
						valor: '',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Existencias.',
						valor: '',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Deudores comerciales y otras cuentas a cobrar.',
						valor: '',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Inversiones en empresas del grupo y asociadas a corto plazo.',
						valor: '',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Inversiones financieras a corto plazo.',
						valor: '',
						desglose: []
					},
					{
						id: 6,
						descripcion: 'Periodificaciones a corto plazo',
						valor: '',
						desglose: []
					},
					{
						id: 7,
						descripcion: 'Efectivo y otros activos líquidos equivalentes.',
						valor: '',
						desglose: []
					}

				]
			}
		]
	},
	{
		id:2,
		descripcion: 'PATRIMONIO NETO',
		valor: '',
		desglose: [
			{
				id: 1,
				descripcion: 'Fondos Propios',
				valor: '',
				desglose: [
					{
						id: 1,
						descripcion: 'Capital',
						valor: '',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Prima de emisión',
						valor: '',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Reservas',
						valor: '',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Acciones y participaciones en patrimonio propias',
						valor: '',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Resultados de ejercicios anteriores',
						valor: '',
						desglose: []
					},
					{
						id: 6,
						descripcion: 'Otras aportaciones de socios',
						valor: '',
						desglose: []
					},
					{
						id: 7,
						descripcion: 'Resultado del ejercicio',
						valor: '',
						desglose: []
					},
					{
						id: 8,
						descripcion: 'Resultado del ejercicio',
						valor: '',
						desglose: []
					},
					{
						id: 9,
						descripcion: 'Resultado del ejercicio',
						valor: '',
						desglose: []
					}

				]
			},
			{
				id: 2,
				descripcion: 'Ajustes por cambio de valor',
				valor: '',
				desglose: [
					{
						id: 1,
						descripcion: 'Activos financieros disponibles para la venta',
						valor: '',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Operaciones de cobertura',
						valor: '',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Otros',
						valor: '',
						desglose: []
					}

				]
			}
		]
	},
	{
		id:3,
		descripcion: 'PASIVO',
		valor: '',
		desglose: [
			{
				id: 1,
				descripcion: 'Pasivo No Corriente',
				valor: '',
				desglose: [
					{
						id: 1,
						descripcion: 'Provisiones a largo plazo',
						valor: '',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Deudas a largo plazo',
						valor: '',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Deudas con empresas del grupo y asociadas a largo plazo',
						valor: '',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Pasivos por impuesto diferido',
						valor: '',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Periodificaciones a largo plazo',
						valor: '',
						desglose: []
					}

				]
			},
			{
				id: 2,
				descripcion: 'Pasivo Corriente',
				valor: '',
				desglose: [
					{
						id: 1,
						descripcion: 'Pasivos vinculados con activos no corrientes mantenidos para la venta',
						valor: '',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Provisiones a corto plazo',
						valor: '',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Deudas a corto plazo.',
						valor: '',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Deudas con empresas del grupo y asociadas a corto plazo',
						valor: '',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Acreedores comerciales y otras cuentas a pagar',
						valor: '',
						desglose: []
					},
					{
						id: 6,
						descripcion: 'Periodificaciones a corto plazo',
						valor: '',
						desglose: []
					}

				]
			}
		]
	}
]
