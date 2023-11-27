import Filter from '@/components/shared/Filter';
import { ToggleGroupDemo } from '@/components/home/HomeMenu';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { HomePageFilters } from '@/constants/filters';
import HomeFilters from '@/components/home/HomeFilters';
import NoResult from '@/components/shared/NoResult';

const topics = [
  // {
  //   id: 1,
  //   title: 'Spiderman',
  //   tags: [
  //     { _id: 1, name: 'Marvel' },
  //     { _id: 2, name: 'Superhero' },
  //   ],
  //   author: 'John Doe',
  //   upvotes: 10,
  //   views: 100,
  //   answers: 5,
  //   createdAt: '2021-09-06T13:00:00.000Z',
  // },
  // {
  //   id: 2,
  //   title: 'Ironman',
  //   tags: [
  //     { _id: 1, name: 'Marvel' },
  //     { _id: 2, name: 'Superhero' },
  //   ],
  //   author: 'John Doe',
  //   upvotes: 10,
  //   views: 100,
  //   answers: 5,
  //   createdAt: '2021-09-06T13:00:00.000Z',
  // },
];
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

      <div className="mt-10 flex w-full flex-col gap-6">
        {topics.length > 0 ? (
          topics.map((topic) => 'TopicCard')
        ) : (
          <NoResult
            title="No Topic To Show"
            description="Don't miss out on the hype! 🌟 Start the conversation, ask anything, and let your curiosity lead the way. Your questions might just spark the next viral wave. Dive in! 💫"
            link="/upload"
            linkTitle="Upload You First Topic"
          />
        )}
      </div>
    </>
  );
}
