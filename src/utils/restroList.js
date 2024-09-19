const restroList = [
  {
    info: {
      id: "570635",
      name: "FPF - Coffee Wale Bhaiya",
      cloudinaryImageId: "bee00361a5f51701f04a67b74877e1f3",
      costForTwo: "₹300 for two",
      cuisines: ["Beverages", "Italian-American", "Fast Food", "Snacks"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      sla: {
        deliveryTime: 26,
        slaString: "25-30 mins",
      },
    },
  },

  {
    info: {
      id: "509673",
      name: "The Waffle Bite",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/15/c2cd94d9-3834-4a42-bca3-d28fe6203c4b_509673.jpg",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Beverages", "Snacks", "Desserts", "Waffle"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      sla: {
        deliveryTime: 34,
        slaString: "30-35 mins",
      },
    },
  },

  {
    info: {
      id: "387939",
      name: "Pizza Baker's",
      cloudinaryImageId: "tzvwxarezwl8x1zmygyl",
      costForTwo: "₹200 for two",
      cuisines: ["Italian", "Pizzas", "Pastas"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      sla: {
        deliveryTime: 51,
        slaString: "50-55 mins",
      },
    },
  },

  {
    info: {
      id: "803186",
      name: "Punjabi Chaska",
      cloudinaryImageId: "76162692632a957838b23a020bc9ca73",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Fast Food", "Burgers", "Snacks"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      sla: {
        deliveryTime: 47,

        slaString: "45-50 mins",
      },
    },
  },

  {
    info: {
      id: "863841",
      name: "Cloud Kitchen",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/30/6e7faa3f-6e20-4062-8dba-bd112a7b8c8a_863841.jpg",

      costForTwo: "₹150 for two",
      cuisines: ["Snacks"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      sla: {
        deliveryTime: 53,
        slaString: "50-55 mins",
      },
    },
  },

  {
    info: {
      id: "207215",
      name: "Kathi Egg Roll",
      cloudinaryImageId: "pm0yepfo6apdtjipb1wr",

      costForTwo: "₹200 for two",
      cuisines: ["Rolls & Wraps", "Snacks"],
      avgRating: 4.2,
      avgRatingString: "4.2",

      sla: {
        deliveryTime: 41,

        slaString: "40-45 mins",
      },
    },
  },

  {
    info: {
      id: "591154",
      name: "The Maggie Man",
      cloudinaryImageId: "xpwuk4yispmvhp0tcqxh",

      costForTwo: "₹150 for two",
      cuisines: ["Fast Food", "Chinese", "Italian", "Beverages"],
      avgRating: 3.8,

      avgRatingString: "3.8",

      sla: {
        deliveryTime: 44,

        slaString: "40-45 mins",
      },
    },
  },

  {
    info: {
      id: "60739",
      name: "Roop Basant Bhojnalaya",
      cloudinaryImageId: "536c2b24d520761fb614b26bb30c8108",
      locality: "Gopalbari",

      costForTwo: "₹200 for two",
      cuisines: ["Tandoor", "Snacks", "Punjabi", "Thalis", "Indian"],
      avgRating: 4.3,

      avgRatingString: "4.3",

      sla: {
        deliveryTime: 41,

        slaString: "40-45 mins",
      },
    },
  },

  {
    info: {
      id: "222081",
      name: "Bombay Misthan Bhandar",
      cloudinaryImageId: "127d6d2a1a4f3e995fba2c5dd93b574f",

      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "Rajasthani",
        "Snacks",
        "Sweets",
        "Indian",
      ],
      avgRating: 4.4,
      avgRatingString: "4.4",
      sla: {
        deliveryTime: 24,
        slaString: "20-25 mins",
      },
    },
  },

  {
    info: {
      id: "45810",
      name: "Falahaar & Kota Kachori",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/26/113162b4-769e-4137-a6d1-724b73d741b9_45810.jpg",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Indian"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      sla: {
        deliveryTime: 27,
        slaString: "25-30 mins",
      },
    },
  },

  {
    info: {
      id: "741630",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/a38e6566-6377-4977-b8a3-68b9e437d8e0_741630.jpg",

      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      avgRatingString: "4.7",
      sla: {
        deliveryTime: 17,
        slaString: "15-20 mins",
      },
    },
  },

  {
    info: {
      id: "45454",
      name: "Brown Sugar",
      cloudinaryImageId: "exbotentwtjdhuuvlo3f",

      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Bakery", "Chinese", "Italian", "Mexican"],
      avgRating: 4.5,

      avgRatingString: "4.5",

      sla: {
        deliveryTime: 24,

        slaString: "20-25 mins",
      },
    },
  },

  {
    info: {
      id: "260139",
      name: "Delights by INOX",
      cloudinaryImageId: "b857fcf611707fedd3773eb02688f925",

      costForTwo: "₹400 for two",
      cuisines: ["Snacks"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      sla: {
        deliveryTime: 28,
        slaString: "25-30 mins",
      },
    },
  },

  {
    info: {
      id: "263804",
      name: "Pure Veg Meals by LunchBox",
      cloudinaryImageId: "ftdatlutjperv30pfbex",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      sla: {
        deliveryTime: 31,
        slaString: "30-35 mins",
      },
    },
  },

  {
    info: {
      id: "861440",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/f89bd47e-f0da-4f9e-ad38-d87d27317c67_861440.jpg",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 4,
      avgRatingString: "4.0",
      sla: {
        deliveryTime: 36,
        slaString: "35-40 mins",
      },
    },
  },

  {
    info: {
      id: "685767",
      name: "Cheesecake & co.",
      cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",

      costForTwo: "₹300 for two",
      cuisines: ["Desserts"],
      avgRating: 4.7,
      avgRatingString: "4.7",
      sla: {
        deliveryTime: 18,
        slaString: "15-20 mins",
      },
    },
  },

  {
    info: {
      id: "801356",
      name: "Makhani Darbar",
      cloudinaryImageId: "c583da4b69d264ffe705e5918fad0e98",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "North Indian", "Kebabs", "Mughlai"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      sla: {
        deliveryTime: 33,
        slaString: "30-35 mins",
      },
    },
  },

  {
    info: {
      id: "582490",
      name: "Cheesecakes By CakeZone",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/e1f4193e-fab2-463c-90f3-94c83835dd0b_582490.jpg",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts"],
      avgRating: 3.6,
      avgRatingString: "3.6",
      sla: {
        deliveryTime: 30,
        slaString: "25-30 mins",
      },
    },
  },

  {
    info: {
      id: "90186",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_90186.JPG",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      sla: {
        deliveryTime: 32,
        slaString: "30-35 mins",
      },
    },
  },

  {
    info: {
      id: "580382",
      name: "The Dessert Heaven - Pastry, Brownie and Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/741a1401-f81a-400a-b245-a7335ca26047_580382.jpg",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      sla: {
        deliveryTime: 32,
        slaString: "30-35 mins",
      },
    },
  },

  {
    info: {
      id: "566387",
      name: "Faasos Signature Wraps & Rolls",
      cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.5,
      avgRatingString: "4.5",
      sla: {
        deliveryTime: 34,
        slaString: "30-35 mins",
      },
    },
  },

  {
    info: {
      id: "686247",
      name: "Starbucks Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/4551821b-8035-424a-8829-3f22471e4422_686247.JPG",

      costForTwo: "₹400 for two",
      cuisines: ["Beverages", "Cafe", "Snacks", "Desserts"],
      avgRating: 4.4,

      avgRatingString: "4.4",

      sla: {
        deliveryTime: 17,

        slaString: "15-20 mins",
      },
    },
  },

  {
    info: {
      id: "545166",
      name: "Vadilal Ice Creams",
      cloudinaryImageId: "nm7ojkjuzffzjwtervnz",

      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Cakes", "Beverages", "Bakery"],
      avgRating: 4.7,

      avgRatingString: "4.7",

      sla: {
        deliveryTime: 33,

        slaString: "30-35 mins",
      },
    },
  },

  {
    info: {
      id: "417378",
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/5c0cf9a2-1195-4825-956b-bf00c6660d91_417378.JPG",

      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
      avgRating: 4.2,

      avgRatingString: "4.2",

      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.7,

        slaString: "25-30 mins",
      },
    },
  },
];

export default restroList;
