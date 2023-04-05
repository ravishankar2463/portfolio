import os
import re

buildDirectory = os.path.abspath( os.path.dirname( __file__ ) ) + "\dist";
filePattern = "^.*\.(css|js|html)$";

class File:
    def __init__(self, fileName, relativeFilePath, fullFilePath):
        self.fileName = fileName
        self.relativeFilePath = relativeFilePath
        self.fullFilePath = fullFilePath
    
    def __str__(self): 
        return "[fileName="+ self.fileName+",relativeFilePath="+ self.relativeFilePath+",fullFilePath="+ self.fullFilePath+"]"


def registerAllFilesInDirectory(fullPath,relPath,fileList):
    files = os.listdir(fullPath)
    for f in files: 
        if os.path.isfile(fullPath+'/'+f) and re.match(filePattern, f):
            fileList.append(File(f,relPath,fullPath+"\\"+f))

def getReplaceString(relativeFilePath):
    slashCount = relativeFilePath.count("\\")
    if(slashCount == 0):
        return "./"
    else:
        return "../"*(slashCount)


def replaceLocalHostStringInFile(File):
    # print("File Path : " + File.fullFilePath)
    lines = [];
    file = open(File.fullFilePath,"r+",encoding="UTF-8"); 
    with file as fp:
        line = fp.readline()
        lines.append(line);
        cnt = 1
        while line:
            if(line.__contains__("http://localhost/")):
                lines.append(line.replace("http://localhost/",getReplaceString(File.relativeFilePath)))
            line = fp.readline()
            lines.append(line)
            cnt += 1
    
    file = open(File.fullFilePath,"r+",encoding="UTF-8"); 
    file.truncate(0)
    file.writelines(lines)
    file.close();

 
if(os.path.exists(buildDirectory)):
    print("Current build directory is : " + buildDirectory)

    fileList = []

    registerAllFilesInDirectory(buildDirectory,"",fileList);

    for rootdir, dirs, files in os.walk(buildDirectory):
        for subdir in dirs:
            fullSubDirPath = os.path.join(rootdir, subdir)
            relativeSubDirPath = fullSubDirPath.replace(buildDirectory,"")
            registerAllFilesInDirectory(fullSubDirPath,relativeSubDirPath,fileList);
    
    for File in fileList:
        replaceLocalHostStringInFile(File)
else:
    print("Dist directory is missing")

