class UserUtil {
    public async getName(name: string) {
        const fullName = name.split(" ")
        const separeName = {firstname: fullName[0], lastname: fullName[fullName.length - 1]}
        return separeName;
    }
}

export default new UserUtil()