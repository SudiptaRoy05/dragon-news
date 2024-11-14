import FindUs from "../../FindUs/FindUs";
import SocilaLogin from "../../SocilaLogin/SocilaLogin";

export default function RighhtNav() {
  return (
    <div>
      <section>
        <SocilaLogin></SocilaLogin>
      </section>
      <section className="mt-3">
        <FindUs></FindUs>
      </section>
    </div>
  );
}
