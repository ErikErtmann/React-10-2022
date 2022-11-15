import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  eng: {
    translation: {
      "admin": "To admin view",
      "shops": "Our shops",
      "cart": "Cart",
      "Your cart is currently empty": "Your cart is currently empty",
      "You currently have": "You currently have",
      "items in cart with a total of": "items in cart with a total of",
      "Add to cart": "Add to cart",
      "Empty Cart": "Empty Cart",
      "Total": "Total",
      
    }
  },
  est: {
    translation: {
      "admin": "Administraatori vaatesse",
      "shops": "Meie poed",
      "cart": "Ostukorv",
      "Your cart is currently empty": "Teie ostukorv on hetkel tühi",
      "You currently have": "Hetkel teil on",
      "items in cart with a total of ": "toodet ostukorvis, mille kogusumma on ",
      "Add to cart": "Lisa ostukorvi",
      "Empty Cart": "Tühjenda ostukorv",
      "Total": "Summa",
      
    }
  },
  chi: {
    translation: {
      "admin": "到管理员视图",
      "shops": "我们的店铺",
      "cart": "大车",
      "Your cart is currently empty": "您的购物车目前是空的",
      "You currently have": "你目前有",
      "Add to cart": "添加到购物车",
      "Empty Cart": "空购物车",
      "Total": "全部的",
      
    }
  },

  den: {
    translation: {
      "admin": "Til admin visning",
      "shops": "Vores butikker",
      "cart": "Vogn",
      "Your cart is currently empty": "Din indkøbskurv er i øjeblikket tom",
      "You currently have": "Du har i øjeblikket",
      "items in cart with a total of ": "varer i indkøbskurven med i alt ",
      "Add to cart": "Tilføj til kurv",
      "Empty Cart": "Tom vogn",
      "Total": "i alt",
    }
  },


  
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "est", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;