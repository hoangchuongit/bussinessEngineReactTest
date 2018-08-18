enum RequestStatus {
    OK = 200,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500
}

enum StorageItem {
    USER_NAME = "UserName",
    ACCESS_TOKEN = "AccessToken",
    EXPIRES_IN = "ExpiresIn",
    REFRESH_TOKEN = "RefreshToken"
}

export {
    RequestStatus,
    StorageItem
}