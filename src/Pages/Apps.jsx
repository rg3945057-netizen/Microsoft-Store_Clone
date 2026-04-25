import data from "../Data/app.json";
import Hero from "../Components/Hero";
import ScrollSection from "../Components/ScrollSection";

export default function Apps() {
  return (
    <div data-theme="dark" style={{ backgroundColor: "#000000" }}>
      <Hero
        link1="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqMEmeRXq8lisia.9FuKd8pvfTz_rqKj9BFHPxbAkBFOXM2wjBN29dWbFH2j2kn.6XG.rm4bFSGvR2RvWsCYImpr6NeBLC8AwQKADtcuntl_SHMnxm1kTDyZUcOTu1fhXW&h=576"
        link2="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqQCi00OjlLOPIu.iaIAqkKDd2lnPYvKM79BnhiJV81NRD9XY6QpMbgmc20Oyka.d1RnAQ8o0Sv_J4FhgNWPhmg078vbw0tTUkJtkdLLvM1Io0e0i3KZV4FYRNIw.RjySeQK94t0VF7Y_px4RLxRGXSA--&h=2160"
        link3="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqxmNO8RfAwmjyUMN3q.9ILv7L688AKZRDthej5lFJofKj0Mf1U_Hqzny8OGATgY.LuEt1UYcYR5dxD_k2stvjNCxla5pFGh4pfvEr_eI.Qgx5lm4omFByBU8x97gDS0QRn2JJcEsNl8AnjEDwEQVbjg--&h=2160"
        link4="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpq84nfPXGfzu9nUBJAM0NDzq1KcODCrv_d8ouJ1FkaKFFvmF21jkw9BVBjSAzDSY0AfzLV1.DAMHJA74PgeC13qXQu1dy1rtLtk5ZQk7TOYHiGUYPeD69zDCiTD2YxmyPi&h=2160"
        text1="Best Entertainment Apps"
        text2="Best of App Pass"
        text3="▶ Top Paid Apps"
        text4="▶ Top Free Apps"
      />

      <ScrollSection title="Popular Apps" data={data.apps.slice(0, 15)} />
      <ScrollSection title="Top Rated Apps" data={data.apps.slice(15, 30)} />
      <ScrollSection title="Productivity Apps" data={data.apps.slice(30, 50)} />
    </div>
  );
}