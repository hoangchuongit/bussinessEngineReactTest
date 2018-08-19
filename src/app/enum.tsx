enum RequestStatus {
    OK = 200,
    BadRequest = 400,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500
}

enum StorageItem {
    USER_NAME = "UserName",
    UID = "Uid",
    ACCESS_TOKEN = "AccessToken",
    EXPIRES_IN = "ExpiresIn",
    REFRESH_TOKEN = "RefreshToken"
}

export {
    RequestStatus,
    StorageItem
}