'use client'
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      msg: 'its working',
      movies: [
        // {
        //   title: "The Taking of Pelham one two three",
        //   year: "1974",
        //   image: "/img/the-taking-of-pelham-one-two-three-1974.jpeg",
        //   category: "suspense"
        // },
        {
          title: "Apocalypse Now",
          year: "1979",
          image: "/img/apocalypse-now-1979.jpeg",
          category: "suspense"
        },
        {
          title: "The Evil Dead",
          year: "1981",
          image: "/img/the-evil-dead-1981.jpeg",
          category: "horror"
        },
        {
          title: "Being There",
          year: "1979",
          image: "/img/being-there-1979.jpeg",
          category: "comedy"
        },
        {
          title: "Carrie",
          year: "1976",
          image: "/img/carrie-1976.jpeg",
          category: "horror"
        },
        {
          title: "Chinatown",
          year: "1974",
          image: "/img/chinatown-1974.jpeg",
          category: "drama"
        },
        {
          title: "Close Encounters of the Third Kind",
          year: "1977",
          image: "/img/close-encounters-of-the-third-kind-1977.jpeg",
          category: "drama"
        },
        {
          title: "Coffy",
          year: "1973",
          image: "/img/coffy-1973.jpeg",
          category: "drama"
        },
        {
          title: "Deliverance",
          year: "1972",
          image: "/img/deliverance-1972.jpeg",
          category: "drama"

        },
        {
          title: "Enter the Dragon",
          year: "1973",
          image: "/img/enter-the-dragon-1973.jpeg",
          category: "drama"
        },
        {
          title: "Frenzy",
          year: "1972",
          image: "/img/frenzy-1972.jpeg",
          category: "drama"
        },
        {
          title: "Moonraker",
          year: "1979",
          image: "/img/moonraker-1979.jpeg",
          category: "drama"
        },
        {
          title: "Network",
          year: "1976",
          image: "/img/network-1976.jpeg",
          category: "drama"
        },
        {
          title: "The Elephant Man",
          year: "1980",
          image: "/img/the-elephant-man-1980.jpeg",
          category: "horror"
        },
        {
          title: "The French Connection",
          year: "1971",
          image: "/img/the-french-connection-1971.jpeg",
          category: "suspense"
        },
        {
          title: "The Long Goodbye",
          year: "1973",
          image: "/img/the-long-goodbye-1973.jpeg",
          category: "drama"
        },
        {
          title: "The Outlaw Josey Wales",
          year: "1976",
          image: "/img/the-outlaw-josey-wales-1976.jpeg",
          category: "drama"
        },
        {
          title: "The Texas Chain Saw Massacre",
          year: "1974",
          image: "/img/the-texas-chain-saw-massacre-1974.jpeg",
          category: "horror"
        }
      ]

    },
    actions: {
    },
  };
};

export default getState;