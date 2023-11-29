import Filter from '@/components/shared/Filter';
import { ToggleGroupDemo } from '@/components/home/HomeMenu';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { HomePageFilters } from '@/constants/filters';
import HomeFilters from '@/components/home/HomeFilters';
import NoResult from '@/components/shared/NoResult';
import QuestionCard from '@/components/cards/QuestionCard';

const questions = [
  {
    _id: '1',
    title: 'Cascading Deletes in SQLAlchemy?',
    tags: [
      { _id: '1', name: 'python' },
      { _id: '2', name: 'sql' },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      picture: '/john-doe.jpg',
    },
    upvotes: 1500000,
    views: 500552,
    answers: [],
    createdAt: new Date('2023-09-01T12:00:00.000Z'),
  },
  {
    _id: '2',
    title: 'How to center a div?',
    tags: [
      { _id: '3', name: 'css' },
      { _id: '4', name: 'html' },
    ],
    author: {
      _id: '2',
      name: 'Jane Smith',
      picture: '/jane-smith.jpg',
    },
    upvotes: 5,
    views: 50,
    answers: [],
    createdAt: new Date('2021-09-02T10:30:00.000Z'),
  },
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
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="No Topic To Show"
            description="Don't miss out on the hype! 🌟 Start the conversation, ask anything, and let your curiosity lead the way. Your questions might just spark the next viral wave. Dive in! 💫"
            link="/ask-question"
            linkTitle="Upload You First Topic"
          />
        )}
      </div>
    </>
  );
}
