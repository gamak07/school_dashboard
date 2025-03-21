import { PiArrowsCounterClockwise } from "react-icons/pi";
import Select from "../../Components/Select";
import Button from "../../Components/Button";

const HeaderSection = () => {

  return (
    <div className="bg-background rounded-[10px]">
      <h1 className="border-b px-[1rem] py-[10px] border-lightgray text-text font-bold text-[25px]">
        Teachers Management
      </h1>
      <div className="flex items-center justify-between gap-[4px] p-[1rem]">
        {/* Filters & Sort */}
        <div className="flex gap-[2px]">
          <Select className="border p-[2px] border-lightgray rounded-[10px]">
            <option value="">Filter by Department</option>
            <option value="science">Science</option>
            <option value="math">Math</option>
            <option value="english">English</option>
          </Select>
          <Select className="border border-lightgray p-[2px] rounded-[10px]">
            <option value="">Sort by</option>
            <option value="name">Name</option>
            <option value="experience">Experience</option>
          </Select>
        </div>
        <div>
          <Button className='flex items-center gap-[3px] bg-accent py-[5px] px-[10px] rounded-[10px] text-background'>
            <span><PiArrowsCounterClockwise /></span>
            Clear Filter
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default HeaderSection;
