import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group';

export function ToggleGroupDemo() {
  return (
    <div className="text-dark200_light900 flex w-full flex-row items-center justify-center max-lg:hidden">
      <ToggleGroup type="single">
        <ToggleGroupItem value="Recommended">
          Recommended
        </ToggleGroupItem>
        <ToggleGroupItem value="Food">Food</ToggleGroupItem>
        <ToggleGroupItem value="Movies">Movies</ToggleGroupItem>
        <ToggleGroupItem value="Technology">
          Technology
        </ToggleGroupItem>
        <ToggleGroupItem value="Music">Music</ToggleGroupItem>
        <ToggleGroupItem value="Shopping">Shopping</ToggleGroupItem>
        <ToggleGroupItem value="Gaming">Gaming</ToggleGroupItem>
        <ToggleGroupItem value="Travel">Travel</ToggleGroupItem>
        <ToggleGroupItem value="Sports">Sports</ToggleGroupItem>
        <ToggleGroupItem value="Reading">Reading</ToggleGroupItem>
        <ToggleGroupItem value="Handicraft">
          Handicraft
        </ToggleGroupItem>
        <ToggleGroupItem value="Automobiles">
          Automobiles
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
