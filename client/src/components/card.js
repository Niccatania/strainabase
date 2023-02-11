// import {
//     Box,
//     Input,
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Image,
//     Stack,
//     Heading,
//     Text,
//     Button,
//   } from "@chakra-ui/react";
 

// export const CardComp = (data) =>{




//     return(
//     <Box width="100%">
//         <div>{data.StrainName}</div>
//           <Card
//             className="wrappa"
//             direction={{ base: "column", sm: "" }}
//             overflow="hidden"
//             variant="outline"
//           >
//             <nav>
//               {data.map((item) => (
//                 <div className="eachCard">
//                   <Image
//                     className="imgStyle"
//                     objectFit="cover"
//                     maxW={{ base: "100%", sm: "200px" }}
//                     src={item.imageLink}
//                     alt="Caffe Latte"
//                   />

//                   <Stack boxShadow="xl" p="6" rounded="md" bg="white">
//                     <CardBody>
//                       <Heading size="md">
//                         <Link
//                           to={{
//                             pathname: "/StrainDetail",
//                           }}
//                         >
//                           {item.StrainName}
//                         </Link>
//                       </Heading>
//                       <Text py="2">{item.Description}</Text>
//                     </CardBody>

//                     <CardFooter>
//                       <Button
//                         className="btnFriend"
//                         variant="solid"
//                         colorScheme="blue"
//                       >
//                         {item.type}
//                       </Button>
//                     </CardFooter>
//                   </Stack>
//                   <h3>
//                     <p></p>
//                   </h3>
//                 </div>
//               ))}
//             </nav>
//           </Card>
//         </Box>
//     )
// }