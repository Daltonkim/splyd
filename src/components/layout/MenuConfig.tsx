
export const MenuConfig = {
  header: {
    self: {},
    items: [
      {
        title: "Dashboard",
        root: true,
        alignment: "left",
        page: "",
        translate: "MENU.DASHBOARD",
        icon: "fas fa-columns",
        user: [
          'Super Admin',
        ]
      },
      {
        title: "Projects",
        root: true,
        alignment: "left",
        page: "projects",
        translate: "MENU.PROJECTS",
        icon: "fas fa-folder-plus",
        user: [
          'Super Admin',
        ]
      },
      {
        title: "Orders",
        root: true,
        alignment: "left",
        page: "orders",
        translate: "MENU.ORDERS",
        icon: "fas fa-shopping-bag",
        user: [
          'Super Admin',
        ]
      },
      {
        title: "Payments",
        root: true,
        alignment: "left",
        translate: "MENU.PAYMENTS",
        page: "payments", // link & page to be created
        icon: "fas fa-credit-card",
        user: [
          'Super Admin',
        ]
      },

      {
        title: "Company",
        root: true,
        alignment: "left",
        translate: "MENU.COMPANY",
        page: "company", // link & page to be created
        icon: "fas fa-columns",
        user: [
          'Administrator',
        ]
      },
      {
        title: 'Bank',
        root: true,
        alignment: "left",
        trannslate: "MENU.BANK",
        page: "bank", // link & page to be created
        icon: "fas fa-money-check-alt",
        user: [
          'Super Admin',
        ]
      },
    ]
  },
  aside: {
    self: {},
    items: [
      {
        title: "Dashboard",
        root: true,
        icon: "fas fa-columns",
        page: "dashboard",
        translate: "MENU.DASHBOARD",
        bullet: "dot"
      },
      {
        title: "Layout Builder",
        root: true,
        icon: "fa-solid fa-table-columns",
        page: "builder"
      },
      { section: "Components" },
      {
        title: "Material UI",
        root: true,
        bullet: "dot",
        icon: "fa-solid fa-table-columns",
        page: "google-material",
        submenu: [
          {
            title: "Layout",
            bullet: "dot",
            page: "google-material/layout/box",
            submenu: [
              {
                title: "Box",
                page: "google-material/layout/box"
              },
              {
                title: "Container",
                page: "google-material/layout/container"
              },
              {
                title: "Grid",
                page: "google-material/layout/grid"
              },
              {
                title: "Grid list",
                page: "google-material/layout/grid-list"
              },
              {
                title: "Hidden",
                page: "google-material/layout/hidden"
              }
            ]
          },
        ]
      },      
    ]
  }
};
