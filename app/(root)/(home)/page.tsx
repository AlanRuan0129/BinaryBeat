import Filter from '@/components/shared/Filter';
import { ToggleGroupDemo } from '@/components/home/HomeMenu';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { HomePageFilters } from '@/constants/filters';
import HomeFilters from '@/components/home/HomeFilters';

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
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />
    </>
  );
}
