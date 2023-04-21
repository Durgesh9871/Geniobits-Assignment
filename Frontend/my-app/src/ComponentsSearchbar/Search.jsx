import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';
import { Box, Input, SimpleGrid } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { LoadingIndicator } from './LoadingIndicator';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from './Pagination';
import {getPropertyData} from "../Redux/action"
import { ProductBox } from '../ComponentsHome/ProductBox';


const Search = () => {
	const [searchTitle, setSearchTitle] = useState('');

	 //  pagination 
	 const [page , setPage] = useState(1)
	 const [pageNext , setPageNext] = useState(false)
   const [pagePre , setPagePre] = useState(false)


   
  
  const nextPageDisable = 3
  
   const {loading , realState , isError} = useSelector((state)=>{
        return {
            loading:state.loading ,
            realState:state.realState ,
            isError:state.isError
        }
    })
	
	
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(getPropertyData(page))
	}, [page]);
   
	// console.log(post)

	 //  pagination --
	 const handleNextPage = (data)=>{
		setPageNext(true)
		setPage(page+data)
		setTimeout(()=>{
		  setPageNext(false)
		},400)
		
	   }
	   const handlePreviosPage = (data)=>{
		setPagePre(true)
		setPage(page+data)
		setTimeout(()=>{
		  setPagePre(false)
		},400)
	   }
	
	return (
		<Box className="" display="block">
			<Box className="inputTag" >
				<SearchIcon fontSize="20px" position="relative" left="30px" color="#fff"  />
				<Input
					shadow="sm"
					pl={9}
					fontSize="20px"
					type="search"
					width={{
						base: '80%',
						sm: '60%',
						md: '64%',
						lg: '50%',
						xl: '50%',
						'2xl': '50%',
					}}
					color="#fff"
					placeholder="Search the Products"
					onChange={(e) => setSearchTitle(e.target.value)}
					height="53px"
					border="2px solid #F0F0F0" focusBorderColor="#F0F0F0" 
				/>
			</Box>

			{loading && <LoadingIndicator />}

			<Box
				id="DisplayDataBox"
				style={{ border: '1px  green', height: 'auto', width: '100%' }}
			>
				<SimpleGrid
					columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4, '2xl': 4 }}
					spacingY={10}
				>
					{!loading &&
						realState
							.filter((value) => {
								if (searchTitle === '') {
									return value;
								} else if (
									value.title.toLowerCase().includes(searchTitle.toLowerCase())
								) {
									return value;
								}
							})
							.map((item) => {
								// console.log(item)
								return (
										<ProductBox
											key={item._id}
											id={item._id}
											src={item.Images}
                                            mainImage={item.mainImage}
											name={item.title}
											model={item.brand}
											price={item.price}
											review={item.rating}
											realPrice={item.realPrice}
											isLaptopLoading={true}
											allData={item}
										/>
								
								);
							})}
				</SimpleGrid>
				
			</Box>
			<Pagination handleNextPage={handleNextPage} handlePreviosPage={handlePreviosPage} page={page} pageNext={pageNext} pagePre={pagePre} nextPageDisable={nextPageDisable} /> 
		</Box>
	);
};

export { Search };
