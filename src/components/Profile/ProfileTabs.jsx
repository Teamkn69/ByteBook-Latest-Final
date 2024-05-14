import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
	return (
		<Flex
			w={"full"}
			justifyContent={"center"}
			gap={{ base: 4, sm: 10 }}
			textTransform={"uppercase"}
			fontWeight={"bold"}
		>
			<Flex borderTop={"1px solid white"} alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<BsGrid3X3 />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
					Posts
				</Text>
			</Flex>

			{/* <Flex alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<BsBookmark />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
					Saved
				</Text>
			</Flex>

			<Flex alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<BsSuitHeart fontWeight={"bold"} />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
					Likes
				</Text>
			</Flex> */}
		</Flex>
	);
};

export default ProfileTabs;

//latest working code
// import { Box, Flex, Text } from "@chakra-ui/react";
// import { useState } from "react";
// import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

// const ProfileTabs = () => {

// 	const activeClass = "1px solid white";
//     const [activeTab,setActiveTab] = useState("Posts");
// 	return (
// 		<Flex
// 			w={"full"}
// 			justifyContent={"center"}
// 			gap={{ base: 4, sm: 10 }}
// 			textTransform={"uppercase"}
// 			fontWeight={"bold"}
// 		>
// 			<Flex onClick={()=>setActiveTab("Posts")} borderTop={activeTab === "Posts"?activeClass:""} alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
// 				<Box fontSize={20}>
// 					<BsGrid3X3 />
// 				</Box>
// 				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
// 					Posts
// 				</Text>
// 			</Flex>

// 			{/* <Flex onClick={()=>setActiveTab("Saved")} borderTop={activeTab === "Saved"?activeClass:""} alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
// 				<Box fontSize={20}>
// 					<BsBookmark />
// 				</Box>
// 				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
// 					Saved
// 				</Text>
// 			</Flex>

// 			<Flex onClick={()=>setActiveTab("Likes")} borderTop={activeTab === "Likes"?activeClass:""} alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
// 				<Box fontSize={20}>
// 					<BsSuitHeart fontWeight={"bold"} />
// 				</Box>
// 				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
// 					Likes
// 				</Text>
// 			</Flex> */}
// 		</Flex>
// 	);
// };

// export default ProfileTabs;
