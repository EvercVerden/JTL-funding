import { HeroSection } from '@/components/hero-section';
import { FeaturedProjects } from '@/components/featured-projects';
import { Categories } from '@/components/categories';
import { HowItWorks } from '@/components/how-it-works';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedProjects />
      <Categories />
      <HowItWorks />
    </div>
  );
}