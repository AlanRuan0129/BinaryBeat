import { ToggleGroupDemo } from '@/components/shared/HomeMenu';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';

export default function Home() {
  return (
    <>
      <div>
        <ToggleGroupDemo />
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for topics"
          otherClasses="flex-1"
        />
        {/* Filters */}
      </div>
    </>
  );
}
