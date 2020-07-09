CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    repoName varchar(128) NOT NULL,
    buildCommand varchar(1028) NOT NULL,
    mainBranch varchar(128) NOT NULL,
    timePeriod INT
);

CREATE TABLE builds (
    id text PRIMARY KEY,
    configurationId varchar(128) NOT NULL,
    commitMessage varchar(1028) NOT NULL,
    commitHash varchar(128) NOT NULL,
    buildNumber INT,
	branchName varchar(128) NOT NULL,
    authorName varchar(1028) NOT NULL,
    status varchar(128) NOT NULL
);