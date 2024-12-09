import SwiperIcon from './services-icon'
import totalProjectsLunched from '../../assets/icon_images/Total_Projects_Launched_icon.png'
import usMade from '../../assets/icon_images/Made_In_The_USA_icon.png'
import pulledByTheBootstraps from '../../assets/icon_images/Pulled_By_The_Bootstraps_icon.png'
import DedicatedTeam from '../../assets/icon_images/A_Dedicated_Team_icon.png'
import fullCycle from '../../assets/icon_images/Full _Cycle_All_-_In_-_One_icon.png'
import raisedProfits from '../../assets/icon_images/Raised_Profits_icon.png'
const aboutUsIcons = ({ title }) => {
  return (
    <>
      <h2 className='jos mx-auto  mb-6 lg:my-10 max-w-[715px] text-center' >{title}</h2>
      <div className='flex flex-wrap justify-center gap-8 '>
        <SwiperIcon
          image={totalProjectsLunched}
          text='Total Projects Lunched'
          imageSize="w-[160px]"
        />
        <SwiperIcon
          image={usMade}
          text='Made In The USA'
          imageSize="w-[160px]"
        />
        <SwiperIcon
          image={pulledByTheBootstraps}
          text='Pulled By The Bootstraps'
          imageSize="w-[160px]"
        />
        <SwiperIcon
          image={DedicatedTeam}
          text='A Dedicated Team'
          imageSize="w-[160px]"
        />
        <SwiperIcon
          image={raisedProfits}
          text='Raised Profits'
          imageSize="w-[160px]"
        />
        <SwiperIcon
          image={fullCycle}
          text='Full Cycle All-In-One'
          imageSize="w-[160px]"
        />
      </div>
    </>
  );
};

export default aboutUsIcons;