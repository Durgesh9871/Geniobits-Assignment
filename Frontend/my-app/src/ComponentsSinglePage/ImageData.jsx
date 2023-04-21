import './ImageData.css';
import { Box } from '@chakra-ui/react';
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';



const ImageData = ({ url}) => {
	

	return (
		<Box
			className="ImageMainBox"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Box
				className="SingleImagesMagnify"
				width={{
					base: '80%',
					sm: '85%',
					md: '84%',
					lg: '76%',
					xl: '76%',
					'2xl': '76%',
				}}
				style={{
					border: '2px solid #eef0f3',
					height: '45vh',
					justifyContent: 'center',
				}}
			>
				<ReactImageMagnify
					style={{ padding: '20px' }}
					{...{
						smallImage: {
							alt: 'Wristwatch by Ted Baker London',
							isFluidWidth: true,
							src: url || "",
						},
						largeImage: {
							src: url || "" ,
							width: 1600,
							height: 700,
						},

						enlargedImagePosition: 'beside',

						enlargedImageContainerDimensions: {
							width: '200%',
							height: '150%',
						},

						shouldUsePositiveSpaceLens: true,
					}}
				/>
			</Box>

			<Box
				className="SingleMagnify"
				width={{
					base: '100%',
					sm: '100%',
					md: '84%',
					lg: '76%',
					xl: '76%',
					'2xl': '76%',
				}}
				height={{
					base: 'auto',
					sm: 'auto',
					md: '60vh',
					lg: '60vh',
					xl: '60vh',
					'2xl': '60vh',
				}}
				style={{ border: '2px solid #eef0f3', justifyContent: 'center' }}
			>
				<ReactImageMagnify
					style={{ padding: '20px' }}
					{...{
						smallImage: {
							alt: 'Wristwatch by Ted Baker London',
							isFluidWidth: true,
							src: url || "",
						},
						largeImage: {
							src: url || "",
							width: 1600,
							height: 700,
						},

						enlargedImagePosition: 'over',

						enlargedImageContainerDimensions: {
							width: '200%',
							height: '150%',
						},

						shouldUsePositiveSpaceLens: true,
					}}
				/>
			</Box>

		
		</Box>
	);
};

export { ImageData };
