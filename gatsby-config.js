module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/yanyanlongxia/137c626e6c2f4db59d91f15202399868?v=b01f8855d15945fba7caf8d62bc0a6de"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/yanyanlongxia/3f43c0288b9b4cf487ce7ac318ce7564?v=3508828a3d664e4b843d9df20557cf62"
            }
        }
    ],
}
