import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About Noah&apos;s Cookbook
      </h1>
      <div className="text-center">
        <p className="text-lg">A personal journey through flavors and memories.</p>
      </div>
      <div className="mb-16 mt-6 flex justify-center md:mb-32 md:mt-16">
        <div className="relative w-64 h-64">
          <Image
            src="/img/noahs-cookbook-icon.png"
            alt="Noah&apos;s Cookbook Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Welcome to Noah&apos;s Cookbook, a cozy corner of the internet where I share my culinary adventures and favorite recipes.
        </p>
        <p>
          Inspired by the elegance and warmth of Quince restaurant, this blog is my digital kitchen - a place to store memories, flavors, and the joy of cooking.
        </p>
        <p>
          Here, you&apos;ll find a collection of recipes I&apos;ve discovered, adapted, and fallen in love with. From comforting home-cooked meals to ambitious culinary experiments, each post is a slice of my gastronomic journey.
        </p>
        <p>
          This blog isn&apos;t about monetization or becoming a culinary influencer. It&apos;s simply my way of documenting the dishes that have left an impression on me, the restaurants that have inspired me, and the food stories I want to remember.
        </p>
        <p>
          Whether you&apos;re here to find your next cooking project or just to share in my love for good food, I&apos;m glad you&apos;ve stopped by. Feel free to explore, and I hope you find something that inspires you to create your own delicious memories.
        </p>
        <p>
          Happy cooking!
        </p>
        <p>
          <Link href="/recipes" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Explore My Recipes
          </Link>
        </p>
      </div>
    </Container>
  );
}