import UserCard from '@/components/cards/UserCard';
import Filter from '@/components/shared/Filter';
import NoResult from '@/components/shared/NoResult';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { UserFilters } from '@/constants/filters';
import { getAllUsers } from '@/lib/actions/user.action';
import { SearchParamsProps } from '@/types';

const Page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getAllUsers({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
  });

  return (
    <>
      <h1 className="h1-bold font-spaceGrotesk text-purple-500">
        All Users
      </h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing minds"
          otherClasses="flex-1"
        />

        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <NoResult
              title="No Users Found"
              description="It looks like there are no users found."
              link="/sign-up"
              linkTitle=" Join to be the first!"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Page;
