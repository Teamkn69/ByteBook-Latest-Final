import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useShowToast = () => {
	const toast = useToast();

	// useCallback is used to prevent infinite loop, by  caching the function
	const showToast = useCallback(
		(title, description, status) => {
			toast({
				title: title,
				description: description,
				status: status,
				duration: 3000,
				isClosable: true,
			});
		},
		[toast]
	);

	return showToast;
};

export default useShowToast;


//latest working code
// import { useToast } from '@chakra-ui/react';
// import { useCallback } from 'react';
// const useShowToast = () => {
//     const toast = useToast();
//     // usecallback is used to prevent infinte loop because toast is a function,by caching the function
//     const showToast = useCallback((title, description, status) => {
//         toast({
//             title: title,
//             description: description,
//             status: status,
//             duration: 3000,                        
//             isClosable: true,
//         });
//     }, [toast]);

//     return showToast;    
// };

// export default useShowToast;