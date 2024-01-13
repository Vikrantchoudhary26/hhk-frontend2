import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFilteredProducts } from '../../actions/Product/ProductAction';
import WalletCards from '../../assets/walletcards.png';
import IllustrationFrames from '../../assets/frames.png';
import AcrylicFrames from '../../assets/acrylicframes.png';
import Diary from '../../assets/diary.jpg';
import Mugs from '../../assets/mugs.jpg';
import Canvas from '../../assets/canvas.png';
import Latest from '../../assets/latest.webp';

// Functional component for circular categories
const CircularCategories = () => {
    // Hooks for navigation and Redux dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Data containing information about each category
    const data = [
        { id: '65200f034c7ac010cd3ea839', image: WalletCards, name: 'Wallet Cards', type: 'child' },
        { id: '652012e19785c326409f4e10', image: IllustrationFrames, name: 'Illustration Frames', type: 'child' },
        { id: '652034e4524a1cc420ec0eab', image: AcrylicFrames, name: 'Acrylic Frames', type: 'child' },
        { id: '6520119941537efb120e647e', image: Diary, name: 'Custom Diaries', type: 'child' },
        { id: '65203530524a1cc420ec0eb4', image: Latest, name: 'Diwali Hamper', type: 'parent' },
        { id: '6520128c9785c326409f4e07', image: Mugs, name: 'Custom Mugs', type: 'subchild' },
        { id: '6520128c9785c326409f4e07', image: Canvas, name: 'Custom Canvas', type: 'subchild' },
        { id: '6520128c9785c326409f4e07', image: Mugs, name: 'MP Art Products', type: 'MP Art Products' },
    ];

    // Function to handle category click, dispatches an action and navigates to the listing page
    const handleCategoryClick = (id, type) => {
        dispatch(getFilteredProducts(id, [0, 4999], 0, type)).then(() => {
            navigate('/listing');
        });
    };

    // Rendering the component
    return (
        <div className='splide5 relative'>
            {/* Splide carousel for displaying categories */}
            <Splide
                aria-label="My Favorite Images"
                className='pl-2 pr-2 sm:pl-14 sm:pr-12'
                options={{
                    arrows: false,
                    pagination: true,
                    perPage: 4,
                }}
            >
                {/* Mapping over data to create SplideSlides for each category */}
                {data.map((item) => (
                    <SplideSlide
                        key={item.id}
                        className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'
                    >
                        {/* Category display with image and name */}
                        <div
                            className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                            onClick={() => handleCategoryClick(item.id, item.type)}
                        >
                            <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                                <img className='min-h-full min-w-full ' src={item.image} alt={item.name} />
                            </span>
                            <br className='hidden sm:block' />
                            <p className='text-[10px] sm:text-[17px] mt-1 sm:mt-0'>{item.name}</p>
                        </div>
                    </SplideSlide>
                ))}
                {/* Special case for the 'Latest Arrival' category */}
                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { navigate('/listing', { state: { from: 'latest' } }) }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full relative scale-125 bottom-3 sm:bottom-10' src={Latest} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px]  sm:text-[16px] mt-1 sm:mt-0'>{'Latest Arrival'}</p>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default CircularCategories;
