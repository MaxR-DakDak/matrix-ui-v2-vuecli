import {Module} from "vuex";
import {RootState} from "@/store/type";
import {MenuState} from "@/store/menu/type";
import {getters} from "@/store/menu/getters";
import {mutations} from "@/store/menu/mutations";
import {actions} from "@/store/menu/actions";


const state: MenuState = {
   linksMainMenu: [
      {title: 'Sales/Marketing', link: 'CurrentTasks', sideMenu: 'sales'},
      {title: 'Warehouse', link: 'StockSummary', sideMenu: 'warehouse'},
      {title: 'Reports/Docs', link: 'InvoiceList', sideMenu: 'reports'},
      {title: 'Others/Website', link: 'BugTrackerList', sideMenu: 'other'},
   ],
   iconsMainMenu: [
      {
         action: () => {
            console.log('test1')
         }, icon: 'plus_icon.svg', tooaltip: 'New Task'
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
               "icon": "task_icon",
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
               "icon": "company_icon",
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
               "icon": "orders_icon",
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
               "icon": "rebate_icon",
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
               "icon": "stock_icon",
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
               "icon": "orders_icon.svg",
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
               "icon": "label_icon.svg",
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
               "icon": "shipping_icon.svg",
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
               "icon": "invoices_icon.svg",
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
               "icon": "warehouse_icon.svg",
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
               "icon": "reports_icon.svg",
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
               "icon": "website_icon.svg",
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
               "icon": "quotation_icon.svg",
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
               "icon": "bug_white_icon.svg",
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
               "icon": "other_icon.svg",
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
      cacheWidth: 0,
   },
}

export const menu: Module<MenuState, RootState> = {
   state,
   getters,
   mutations,
   actions
}
