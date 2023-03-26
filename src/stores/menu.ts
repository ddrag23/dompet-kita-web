import { defineStore } from "pinia";

export const useMenu = defineStore("menu", () => {
  const menu : any[] = [
    {
      path: "/",
      icon: "HomeFilled",
      title: "Home",
    },
    {
      path: "/category",
      icon: "Tickets",
      title: "Kategori",
    },
    {
      path: "/transaction",
      icon: "Memo",
      title: "Transaksi",
      sub_menu : undefined
    },
    // {
    //   path: "/transaksi",
    //   icon: "Memo",
    //   title: "Transaksi",
    //   sub_menu: [
    //     {
    //       path: "/transaksi/income",
    //       title: "Transaksi Masuk",
    //     },
    //     {
    //       path: "/transaksi/outgoing",
    //       title: "Transaksi Keluar",
    //     },
    //   ],
    // },
  ];
  return { menu };
});
