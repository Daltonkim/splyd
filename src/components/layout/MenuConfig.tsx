
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
           
    ]
  }
};
