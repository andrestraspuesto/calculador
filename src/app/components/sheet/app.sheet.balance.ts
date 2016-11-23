import {Cuenta} from './app.sheet.cuenta'

export const BALANCE: Cuenta[] = [
	{
		id:1,
		descripcion: 'ACTIVO',
		valor: '0,0',
		desglose: [
			{
				id: 1,
				descripcion: 'Activo No Corriente',
				valor: '0,0',
				desglose: [
					{
						id: 1,
						descripcion: 'Inmovilizado Intangible',
						valor: '0,0',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Inmovilizado Material',
						valor: '0,0',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Inversiones Inmobiliarias.',
						valor: '0,0',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Inversiones en empresas del grupo y asociadas a largo plazo',
						valor: '0,0',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Inversiones financieras a largo plazo',
						valor: '0,0',
						desglose: []
					},
					{
						id: 6,
						descripcion: 'Activos por impuesto diferidos',
						valor: '0,0',
						desglose: []
					}

				]
			},
			{
				id: 2,
				descripcion: 'Activo Corriente',
				valor: '0,0',
				desglose: [
					{
						id: 1,
						descripcion: 'Activos no corrientes mantenidos para la venta.',
						valor: '0,0',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Existencias.',
						valor: '0,0',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Deudores comerciales y otras cuentas a cobrar.',
						valor: '0,0',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Inversiones en empresas del grupo y asociadas a corto plazo.',
						valor: '0,0',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Inversiones financieras a corto plazo.',
						valor: '0,0',
						desglose: []
					},
					{
						id: 6,
						descripcion: 'Periodificaciones a corto plazo',
						valor: '0,0',
						desglose: []
					},
					{
						id: 7,
						descripcion: 'Efectivo y otros activos líquidos equivalentes.',
						valor: '0,0',
						desglose: []
					}

				]
			}
		]
	},
	{
		id:2,
		descripcion: 'PATRIMONIO NETO',
		valor: '0,0',
		desglose: [
			{
				id: 1,
				descripcion: 'Fondos Propios',
				valor: '0,0',
				desglose: [
					{
						id: 1,
						descripcion: 'Capital',
						valor: '0,0',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Prima de emisión',
						valor: '0,0',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Reservas',
						valor: '0,0',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Acciones y participaciones en patrimonio propias',
						valor: '0,0',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Resultados de ejercicios anteriores',
						valor: '0,0',
						desglose: []
					},
					{
						id: 6,
						descripcion: 'Otras aportaciones de socios',
						valor: '0,0',
						desglose: []
					},
					{
						id: 7,
						descripcion: 'Resultado del ejercicio',
						valor: '0,0',
						desglose: []
					},
					{
						id: 8,
						descripcion: 'Resultado del ejercicio',
						valor: '0,0',
						desglose: []
					},
					{
						id: 9,
						descripcion: 'Resultado del ejercicio',
						valor: '0,0',
						desglose: []
					}

				]
			},
			{
				id: 2,
				descripcion: 'Ajustes por cambio de valor',
				valor: '0,0',
				desglose: [
					{
						id: 1,
						descripcion: 'Activos financieros disponibles para la venta',
						valor: '0,0',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Operaciones de cobertura',
						valor: '0,0',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Otros',
						valor: '0,0',
						desglose: []
					}

				]
			}
		]
	},
	{
		id:3,
		descripcion: 'PASIVO',
		valor: '0,0',
		desglose: [
			{
				id: 1,
				descripcion: 'Pasivo No Corriente',
				valor: '0,0',
				desglose: [
					{
						id: 1,
						descripcion: 'Provisiones a largo plazo',
						valor: '0,0',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Deudas a largo plazo',
						valor: '0,0',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Deudas con empresas del grupo y asociadas a largo plazo',
						valor: '0,0',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Pasivos por impuesto diferido',
						valor: '0,0',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Periodificaciones a largo plazo',
						valor: '0,0',
						desglose: []
					}

				]
			},
			{
				id: 2,
				descripcion: 'Pasivo Corriente',
				valor: '0,0',
				desglose: [
					{
						id: 1,
						descripcion: 'Pasivos vinculados con activos no corrientes mantenidos para la venta',
						valor: '0,0',
						desglose: []
					},
					{
						id: 2,
						descripcion: 'Provisiones a corto plazo',
						valor: '0,0',
						desglose: []
					},
					{
						id: 3,
						descripcion: 'Deudas a corto plazo.',
						valor: '0,0',
						desglose: []
					},
					{
						id: 4,
						descripcion: 'Deudas con empresas del grupo y asociadas a corto plazo',
						valor: '0,0',
						desglose: []
					},
					{
						id: 5,
						descripcion: 'Acreedores comerciales y otras cuentas a pagar',
						valor: '0,0',
						desglose: []
					},
					{
						id: 6,
						descripcion: 'Periodificaciones a corto plazo',
						valor: '0,0',
						desglose: []
					}

				]
			}
		]
	}
]
