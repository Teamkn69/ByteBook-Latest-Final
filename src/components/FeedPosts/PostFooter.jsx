import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from "../Modals/CommentsModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
	const { isCommenting, handlePostComment } = usePostComment();
	const [comment, setComment] = useState("");
	const authUser = useAuthStore((state) => state.user);
	const commentRef = useRef(null);
	const { handleLikePost, isLiked, likes } = useLikePost(post);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleSubmitComment = async () => {
		await handlePostComment(post.id, comment);
		setComment("");
	};

	return (
		<Box mb={10} marginTop={"auto"}>
			<Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
				<Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
					{!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
				</Box>

				<Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
					<CommentLogo />
				</Box>
			</Flex>
			<Text fontWeight={600} fontSize={"sm"}>
				{likes} likes
			</Text>

			{isProfilePage && (
				<Text fontSize='12' color={"gray"}>
					Posted {timeAgo(post.createdAt)}
				</Text>
			)}

			{!isProfilePage && (
				<>
					<Text fontSize='sm' fontWeight={700}>
						{creatorProfile?.username}{" "}
						<Text as='span' fontWeight={400}>
							{post.caption}
						</Text>
					</Text>
					{post.comments.length > 0 && (
						<Text fontSize='sm' color={"gray"} cursor={"pointer"} onClick={onOpen}>
							View all {post.comments.length} comments
						</Text>
					)}
					{/* COMMENTS MODAL ONLY IN THE HOME PAGE */}
					{isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post} /> : null}
				</>
			)}

			{authUser && (
				<Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
					<InputGroup>
						<Input
							variant={"flushed"}
							placeholder={"Add a comment..."}
							fontSize={14}
							onChange={(e) => setComment(e.target.value)}
							value={comment}
							ref={commentRef}
						/>
						<InputRightElement>
							<Button
								fontSize={14}
								color={"blue.500"}
								fontWeight={600}
								cursor={"pointer"}
								_hover={{ color: "white" }}
								bg={"transparent"}
								onClick={handleSubmitComment}
								isLoading={isCommenting}
							>
								Post
							</Button>
						</InputRightElement>
					</InputGroup>
				</Flex>
			)}
		</Box>
	);
};

export default PostFooter;

// latest working code
// import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from "@chakra-ui/react";
// import { useRef, useState } from "react";
// import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";
// import usePostComment from "../../hooks/usePostComment";
// import useAuthStore from "../../store/authStore";
// import useLikePost from "../../hooks/useLikePost";
// import { timeAgo } from "../../utils/timeAgo";
// import CommentsModal from "../Modals/CommentsModal";

// const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
// 	const { isCommenting, handlePostComment } = usePostComment();
// 	const [comment, setComment] = useState("");
// 	const authUser = useAuthStore((state) => state.user);
// 	const commentRef = useRef(null);
// 	const { handleLikePost, isLiked, likes } = useLikePost(post);
// 	const { isOpen, onOpen, onClose } = useDisclosure();

// 	const handleSubmitComment = async () => {
// 		await handlePostComment(post.id, comment);
// 		setComment("");
// 	};

// 	return (
// 		<Box mb={10} marginTop={"auto"}>
// 			<Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
// 				<Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
// 					{!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
// 				</Box>

// 				<Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
// 					<CommentLogo />
// 				</Box>
// 			</Flex>
// 			<Text fontWeight={600} fontSize={"sm"}>
// 				{likes} likes
// 			</Text>

// 			{isProfilePage && (
// 				<Text fontSize='12' color={"gray"}>
// 					Posted {timeAgo(post.createdAt)}
// 				</Text>
// 			)}

// 			{!isProfilePage && (
// 				<>
// 					<Text fontSize='sm' fontWeight={700}>
// 						{creatorProfile?.username}{" "}
// 						<Text as='span' fontWeight={400}>
// 							{post.caption}
// 						</Text>
// 					</Text>
// 					{post.comments.length > 0 && (
// 						<Text fontSize='sm' color={"gray"} cursor={"pointer"} onClick={onOpen}>
// 							View all {post.comments.length} comments
// 						</Text>
// 					)}
// 					{/*COMMENTS MODAL ONLY IN THE HOME PAGE */}
// 					{isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post} /> : null} 
// 				</>
// 			)}

// 			{authUser && (
// 				<Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
// 					<InputGroup>
// 						<Input
// 							variant={"flushed"}
// 							placeholder={"Add a comment..."}
// 							fontSize={14}
// 							onChange={(e) => setComment(e.target.value)}
// 							value={comment}
// 							ref={commentRef}
// 						/>
// 						<InputRightElement>
// 							<Button
// 								fontSize={14}
// 								color={"blue.500"}
// 								fontWeight={600}
// 								cursor={"pointer"}
// 								_hover={{ color: "white" }}
// 								bg={"transparent"}
// 								onClick={handleSubmitComment}
// 								isLoading={isCommenting}
// 							>
// 								Post
// 							</Button>
// 						</InputRightElement>
// 					</InputGroup>
// 				</Flex>
// 			)}
// 		</Box>
// 	);
// };

// export default PostFooter;
// initial code
// import {
//   Box,
//   Button,
//   Flex,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Text,
// } from "@chakra-ui/react";
// import { useEffect, useRef, useState } from "react";
// import {
//   CommentLogo,
//   NotificationsLogo,
//   UnlikeLogo,
// } from "../../assets/constants";
// import usePostComment from "../../hooks/usePostComment";
// import useAuthStore from "../../store/authStore";
// import useLikePost from "../../hooks/useLikePost";

// const PostFooter = ({isProfilePage,post,username,creatorProfile}) => {
//   const { isCommenting, handlePostComment } = usePostComment();
// 	const [comment, setComment] = useState('');
//   const commentRef = useRef(null);
//   const authUser = useAuthStore((state) => state.user);
//   console.log("Post data::",post);
//   const { isLiked, likes, handleLikePost} = useLikePost(post);
//   const handleSubmitComment = async () => {
// 		await handlePostComment(post.id, comment);
// 		setComment("");
// 	};


// // useEffect(()=>{
// //   if(isLiked === true){
// //     setLikeCount(likeCount+1);
// //    }
// //    else 
// //    setLikeCount(likeCount-1); 
// // },[isLiked])
//   return (
//     <Box mb={10} marginTop={"auto"}>
//       <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
//         <Box
//           cursor={"pointer"}
//           fontSize={18}
//           onClick={handleLikePost}
//         >
//           {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
//         </Box>

//         <Box
//           cursor={"pointer"}
//           fontSize={18}
//           onClick={() => commentRef.current.focus()}
//         >
//           <CommentLogo />
//         </Box>
//       </Flex>
//       <Text fontWeight={600} fontSize={"sm"}>
//         {likes} likes
//       </Text>

//       {
//         <>
//           <Text fontSize="sm" fontWeight={700}>
//             {/* {"Hello"}{" "} */}
//             <Text as="span" fontWeight={400}>
//               {/* {"POST CAPTION"} */}
//             </Text>
//           </Text>

//           {/* COMMENTS MODAL ONLY IN THE HOME PAGE */}
//         </>
//       }

//       {
//         authUser && (<Flex
//           alignItems={"center"}
//           gap={2}
//           justifyContent={"space-between"}
//           w={"full"}
//         >
//           <InputGroup>
//             <Input
//               variant={"flushed"}
//               placeholder={"Add a comment..."}
//               fontSize={14}
//               onChange={(e) => setComment(e.target.value)}
//               value={comment}
//               ref={commentRef}
//             />
//             <InputRightElement>
//               <Button
//                 fontSize={14}
//                 color={"blue.500"}
//                 fontWeight={600}
//                 cursor={"pointer"}
//                 _hover={{ color: "white" }}
//                 bg={"transparent"}
//                 onClick = {handleSubmitComment}
//                 isLoading = {isCommenting}
//               >
//                 Post
//               </Button>
//             </InputRightElement>
//           </InputGroup>
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default PostFooter;
