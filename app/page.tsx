import image1 from '../image/red.png'
import image2 from '../image/spy.png'
import image3 from '../image/Designer.png'
import { HowToPlay } from "@/components/HowToPlay";
import Card from "@/components/Card";
import Next from "@/components/Next";
export default function Home() {
  return (
    <>
      <div className="gap-8 flex md:flex-row flex-col justify-center">
        <Card image={image1} imageAlt="Spy picture" title="Spy" />
        <Card image={image2} imageAlt="Player picture" title="Player" />
        <Card image={image3} imageAlt="Time picture" title="Time" />
      </div>
      <Next/>
      <HowToPlay/>
    </>
  );
}
