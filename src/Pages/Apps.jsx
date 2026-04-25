import data from "../Data/app.json";
import AppCard from "../Components/AppCard";
import Hero from "../Components/Hero";
import ScrollSection from "../Components/ScrollSection";

export default function Apps() {
  return (
    <div>

      {/* HERO */}
      <Hero
        link1="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBcXm6WqCy1Yzd43klSX2PfqeV.suPzi_.a.lad5HNsZt8GOjlH843tLG0pWy8RWVb_zcLe4jEWnuve7wABPqHtE-&format=source&w=170"
        link2="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqQCi00OjlLOPIu.iaIAqkKDd2lnPYvKM79BnhiJV81NRD9XY6QpMbgmc20Oyka.d1RnAQ8o0Sv_J4FhgNWPhmg078vbw0tTUkJtkdLLvM1Io0e0i3KZV4FYRNIw.RjySeQK94t0VF7Y_px4RLxRGXSA--&h=2160"
        link3="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqxmNO8RfAwmjyUMN3q.9ILv7L688AKZRDthej5lFJofKj0Mf1U_Hqzny8OGATgY.LuEt1UYcYR5dxD_k2stvjNCxla5pFGh4pfvEr_eI.Qgx5lm4omFByBU8x97gDS0QRn2JJcEsNl8AnjEDwEQVbjg--&h=2160"
        link4="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpq84nfPXGfzu9nUBJAM0NDzq1KcODCrv_d8ouJ1FkaKFFvmF21jkw9BVBjSAzDSY0AfzLV1.DAMHJA74PgeC13qXQu1dy1rtLtk5ZQk7TOYHiGUYPeD69zDCiTD2YxmyPi&h=2160"
        text1="Adobe Document Reader"
      />

      {/* SCROLL SECTIONS */}

      <ScrollSection
        title="Popular Apps"
        data={data.apps}
        renderCard={(app) => <AppCard key={app.id} app={app} />}
      />

      <ScrollSection
        title="Top Rated Apps"
        data={[...data.apps].sort((a, b) => b.rating - a.rating)}
        renderCard={(app) => <AppCard key={app.id} app={app} />}
      />

      <ScrollSection
        title="Productivity Apps"
        data={data.apps.filter((app) => app.category === "Productivity")}
        renderCard={(app) => <AppCard key={app.id} app={app} />}
      />

    </div>
  );
}