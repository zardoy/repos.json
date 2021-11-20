import got from 'got'

// TODOO SCHEMA!
export type ReposJson<T extends Record<string, any> = {}> = {
    [category: string]: {
        repos: string[]
    } & T
}

export const getUserReposJson = async (user: string, normalize = true): Promise<ReposJson> => {
    // get latest repos.json from user profile repo. However jsdelivr still cache. Might be a problem
    let { body: reposJson } = await got<ReposJson>(`https://cdn.jsdelivr.net/gh/${user}/${user}/repos.json`, {
        responseType: 'json',
    })
    reposJson = Object.fromEntries(
        Object.entries(reposJson).map(([category, { repos, ...rest }]) => [
            category,
            {
                // restore repos slugs
                repos: repos.map(repo => (repo.split('/').length === 1 ? `${user}/${repo}` : repo)),
                ...rest,
            },
        ]),
    )
    return reposJson
}
