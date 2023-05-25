'use client'
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      msg: 'its working',
      // movies: [
      //   <Image width={400} height={600} className="movie" src={"/img/the-taking-of-pelham-one-two-three-1974.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/apocalypse-now-1979.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/the-evil-dead-1981.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/being-there-1979.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/carrie-1976.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/chinatown-1974.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/close-encounters-of-the-third-kind-1977.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/coffy-1973.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/deliverance-1972.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/enter-the-dragon-1973.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/frenzy-1972.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/moonraker-1979.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/network-1976.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/the-elephant-man-1980.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/the-french-connection-1971.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/the-long-goodbye-1973.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/the-outlaw-josey-wales-1976.jpeg"} alt=""></Image>,
      //   <Image width={400} height={600} className="movie" src={"/img/the-texas-chain-saw-massacre-1974.jpeg"} alt=""></Image>,
      // ],
      movies: [
        "/img/the-taking-of-pelham-one-two-three-1974.jpeg",
        "/img/apocalypse-now-1979.jpeg",
        "/img/the-evil-dead-1981.jpeg",
        "/img/being-there-1979.jpeg",
        "/img/carrie-1976.jpeg",
        "/img/chinatown-1974.jpeg",
        "/img/close-encounters-of-the-third-kind-1977.jpeg",
        "/img/coffy-1973.jpeg",
        "/img/deliverance-1972.jpeg",
        "/img/enter-the-dragon-1973.jpeg",
        "/img/frenzy-1972.jpeg",
        "/img/moonraker-1979.jpeg",
        "/img/network-1976.jpeg",
        "/img/the-elephant-man-1980.jpeg",
        "/img/the-french-connection-1971.jpeg",
        "/img/the-long-goodbye-1973.jpeg",
        "/img/the-outlaw-josey-wales-1976.jpeg",
        "/img/the-texas-chain-saw-massacre-1974.jpeg"
      ],

    },
    actions: {
    },
  };
};

export default getState;