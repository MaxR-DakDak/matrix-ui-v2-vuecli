import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const menu = {
	state: () => ({
		linksMainMenu: [
			{title: 'Orders', link: 'CurrentTasks', sideMenu: 'sales'},
			{title: 'Warehouse', link: 'StockSummary', sideMenu: 'warehouse'},
			{title: 'Reports/Docs', link: 'InvoiceList', sideMenu: 'reports'},
			{title: 'Others/Website', link: 'BugTrackerList', sideMenu: 'other'},
		],
		iconsMainMenu: [
			{
				action: () => {
					console.log('test1')
				}, icon: 'plus_icon.svg', tooltip: 'New Task'
			},
			{
				action: 'search', icon: 'search_icon.svg', tooltip: 'Search'
			},
			{
				action: () => {
					console.log('test3')
				}, icon: 'bell_icon.svg', tooltip: 'Notification'
			},
			{
				action: () => {
					console.log('test4')
				}, icon: 'user_icon.svg', tooltip: 'User'
			},
			{
				action: () => {
					console.log('test5')
				}, icon: 'bug_icon.svg', tooltip: 'New Bug'
			},
		],
		linksSideMenu: {
			"sales": {
				"items": {
					"Task List": {
						"title": "Task List",
						"items": {
							"New Tasks": {
								"title": "New Tasks",
								"url": "NewTasks"
							},
							"New Return Task": {
								"title": "New Return Task",
								"url": "NewReturnTask"
							},
							"Current Tasks": {
								"title": "Current Tasks",
								"url": "CurrentTasks"
							},
							"Completed Tasks": {
								"title": "Completed Tasks",
								"url": "CompletedTasks"
							},
							"Archived Tasks": {
								"title": "Archived Tasks",
								"url": "ArchivedTasks"
							},
							"Confirmation Requests": {
								"title": "Confirmation Requests",
								"url": "ConfirmationRequests"
							},
							"Confirmation Archive": {
								"title": "Confirmation Archive",
								"url": "ConfirmationArchive"
							},
						}
					},
					"Companies": {
						"title": "Companies",
						"items": {
							"New Company": {
								"title": "New Company",
								"url": "NewCompany"
							},
							"Current Companies": {
								"title": "Current Companies",
								"url": "CurrentCompanies"
							},
						}
					},
					"Orders": {
						"title": "Orders",
						"items": {
							"Sales Orders": {
								"title": "Sales Orders",
								"url": "SalesOrders"
							},
							"Sales Orders Archive": {
								"title": "Sales Orders Archive",
								"url": "SalesOrdersArchive"
							},
						}
					},
					"Rebates": {
						"title": "Rebates",
						"items": {
							"New Rebate": {
								"title": "New Rebate",
								"url": "NewRebate"
							},
							"Rebate List": {
								"title": "Rebate List",
								"url": "RebateList"
							},
						}
					},
				}
			},
			"warehouse": {
				"items": {
					"Stock": {
						"title": "Stock",
						"items": {
							"Stock Summary": {
								"title": "Stock Summary",
								"url": "StockSummary"
							},
							"Full Stock List": {
								"title": "Full Stock List",
								"url": "FullStockList"
							},
							"Carton Sizes/Weight List": {
								"title": "Carton Sizes/Weight List",
								"url": "CartonSizesWeightList"
							},
						}
					},
					"Purchase Orders": {
						"title": "Purchase Orders",
						"items": {
							"Stock Summary": {
								"title": "New Purchase Order",
								"url": "NewPurchaseOrder"
							},
							"New Cost Invoice": {
								"title": "New Cost Invoice",
								"url": "NewCostInvoice"
							},
							"Purchase Orders List": {
								"title": "Purchase Orders List",
								"url": "PurchaseOrdersList"
							},
							"Cost Invoices List": {
								"title": "Cost Invoices List",
								"url": "CostInvoicesList"
							},
						}
					},
					"Labels": {
						"title": "Labels",
						"items": {
							"Labels to Print": {
								"title": "Labels to Print",
								"url": "LabelstoPrint"
							},
							"Laptop EAN Codes": {
								"title": "Laptop EAN Codes",
								"url": "LaptopEANCodes"
							},
						}
					},
					"Shipping": {
						"title": "Shipping",
						"items": {
							"New Shipment": {
								"title": "New Shipment",
								"url": "NewShipment"
							},
							"Pending Shipments": {
								"title": "Pending Shipments",
								"url": "PendingShipments"
							},
							"Shipments Archive": {
								"title": "Shipments Archive",
								"url": "ShipmentsArchive"
							},
						}
					},
				}
			},
			"reports": {
				"items": {
					"Invoices": {
						"title": "Invoices",
						"items": {
							"Invoice List": {
								"title": "Invoice List",
								"url": "InvoiceList"
							},
							"PI List": {
								"title": "PI List",
								"url": "PIList"
							},
							"PoP List": {
								"title": "PoP List",
								"url": "PoPList"
							},
							"Invoice Tracker": {
								"title": "Invoice Tracker",
								"url": "InvoiceTracker"
							},
						}
					},
					"Warehouse": {
						"title": "Warehouse",
						"items": {
							"PZ/WZ": {
								"title": "PZ/WZ",
								"url": "PZWZ"
							},
							"Warranty Tracker": {
								"title": "Warranty Tracker",
								"url": "WarrantyTracker"
							},
						}
					},
					"Sales Reports": {
						"title": "Sales Reports",
						"items": {
							"Buyer": {
								"title": "Buyer",
								"url": "Buyer"
							},
							"Buyer Country": {
								"title": "Buyer Country",
								"url": "BuyerCountry"
							},
							"Delivery Country": {
								"title": "Delivery Country",
								"url": "DeliveryCountry"
							},
							"Model": {
								"title": "Model",
								"url": "Model"
							},
							"Item Type": {
								"title": "Item Type",
								"url": "ItemType"
							},
						}
					},
				}
			},
			"other": {
				"items": {
					"Website": {
						"title": "Website",
						"items": {
							"File Uploader": {
								"title": "File Uploader",
								"url": "FileUploader"
							},
							"New Newsletter": {
								"title": "New Newsletter",
								"url": "NewNewsletter"
							},
							"New Promotion": {
								"title": "New Promotion",
								"url": "NewPromotion"
							},
							"New Partner": {
								"title": "New Partner",
								"url": "NewPartner"
							},
							"Partners List": {
								"title": "Partners List",
								"url": "PartnersList"
							},
							"New Promotions List": {
								"title": "Promotions List",
								"url": "PromotionsList"
							},
							"Trust Us": {
								"title": "Trust Us",
								"url": "TrustUs"
							},
							"Raty": {
								"title": "Raty",
								"url": "Raty"
							},
						}
					},
					"Quotation/Parts": {
						"title": "Quotation/Parts",
						"items": {
							"Quotation Importer": {
								"title": "Quotation Importer",
								"url": "QuotationImporter"
							},
							"New Key Part": {
								"title": "New Key Part",
								"url": "NewKeyPart"
							},
							"Key Part List": {
								"title": "Key Part List",
								"url": "KeyPartList"
							},
							"Incorrect Laptops Report": {
								"title": "Incorrect Laptops Report",
								"url": "IncorrectLaptopsReport"
							},
						}
					},
					"Bug Tracker": {
						"title": "Bug Tracker",
						"items": {
							"Bug Tracker List": {
								"title": "Bug Tracker List",
								"url": "BugTrackerList"
							},
							"Bug Archive": {
								"title": "Bug Archive",
								"url": "BugArchive"
							},
						}
					},
					"Other": {
						"title": "Other",
						"items": {
							"Add New Driver": {
								"title": "Add New Driver",
								"url": "AddNewDriver"
							},
							"Driver List": {
								"title": "Driver List",
								"url": "DriverList"
							},
							"Exchange Rate Calendar": {
								"title": "Exchange Rate Calendar",
								"url": "ExchangeRateCalendar"
							},
						}
					},
				}
			},
		},
		searchData: {},
		ui: {
			hash: window.location.hash.substring(1),
			openedTab: 'sales',
			mobileCss: false,
			showSideMenu: true,
			activeSideMenu: false,
			cacheWidth: null,
		},
	}),
	mutations: {
		setSearchData(state, data) {
			state.searchData = Object.assign({}, state.searchData, data)
		},
		checkHash(state, newHash, newTab = false) {
			if (!newHash) newHash = 'CurrentTasks'
			window.location.hash = state.ui.hash = newHash

			if (!newTab) {
				const findAllByKey = (obj, valueToFind) => {
					return Object.values(obj)
					             .reduce((acc, v) => (v === valueToFind)
							             ? true
							             : (typeof v === 'object')
								             ? acc.concat(findAllByKey(v, valueToFind))
								             : acc
						             , [])
				}

				for (const [k, v] of Object.entries(state.linksSideMenu)) {
					if (findAllByKey(v, state.ui.hash)[0]) {
						state.ui.openedTab = k
					}
				}
			}
			else {
				state.menu.ui.openedTab = newTab
			}
		},
		checkMobileCss(state) {
			if (state.cacheWidth === null) state.cacheWidth = window.innerWidth

			if (state.cacheWidth !== window.innerWidth) {
				state.ui.mobileCss = window.innerWidth <= 768
				state.ui.showSideMenu = window.innerWidth > 768
				state.cacheWidth = window.innerWidth
			}
		},
	},
	getters: {
		linksMainMenuGetAll(state) {
			return state.linksMainMenu
		},
		iconsMainMenuGetAll(state) {
			return state.iconsMainMenu
		},
		linksSideMenuGetFiltered(state) {
			return state.linksSideMenu[state.ui.openedTab].items
		},
		searchDataGetAll(state) {
			return state.searchData
		},
		uiGetAll(state) {
			return state.ui
		},
	},
	actions: {
		getSearchData() {
			//get all data
		},
		getSearchDataBy() {
			//get data particular
		}
	}
}

export default new Vuex.Store({
	modules: {
		menu,
	}
})
