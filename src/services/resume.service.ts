// export const getSkeleton = async (
//   locale: TLang,
// ): Promise<IApiResponse<ISkeleton>> => {
//   const response = await fetch(
//     `${process.env.API_HOST}/api/skeleton?locale=${locale}`,
//     config,
//   );
//
//   return await response.json();
// };
//
// export const getCoverLetter = async (
//   locale: TLang,
// ): Promise<IApiResponse<ICoverLetter>> => {
//   const response = await fetch(
//     `${process.env.API_HOST}/api/cover-letter?locale=${locale}`,
//     config,
//   );
//
//   return await response.json();
// };
//
// export const getCourses = async (
//   locale: TLang,
// ): Promise<IPaginateApiResponse<ICourse[]>> => {
//   const response = await fetch(
//     `${process.env.API_HOST}/api/courses?locale=${locale}&sort=startDate:DESC`,
//     config,
//   );
//
//   return await response.json();
// };
//
// export const getExperiences = async (
//   locale: TLang,
// ): Promise<IPaginateApiResponse<IExperience[]>> => {
//   const response = await fetch(
//     `${process.env.API_HOST}/api/experiences?locale=${locale}&pagination[pageSize]=4&populate[1]=skills&sort=startDate:DESC`,
//     config,
//   );
//
//   return await response.json();
// };
//
// export const getSkillsSection = async (
//   locale: TLang,
// ): Promise<IApiResponse<ISkillSectionResponse>> => {
//   const response = await fetch(
//     `${process.env.API_HOST}/api/skills-section?locale=${locale}&populate[skills][populate][0]=skill_category&populate=skill_categories`,
//     config,
//   );
//
//   return await response.json();
// };
