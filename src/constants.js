/**
 * 文件容量转换具体的bytes数值
 * @param fileSize 参数类型（String），例：2MB，230KB，1TB等
 * @param thousand 参数类型（boolean），是否以1000为计算单位，否则以默认的1024为计算单位
 */
let fileSize2Bytes = (fileSize, thousand)=>{
    if(!fileSize) return null;
    let baseUnit = thousand ? 1000 : 1024;
    let kb = baseUnit, mb = kb * baseUnit, gb = mb * baseUnit;
    let tmpCode = fileSize.substring(fileSize.length - 2).toUpperCase();
    let sizeNumber = fileSize.substring(0, fileSize.length - 2);
    let num = Number.parseInt(sizeNumber);
    let result = 0;
    switch (tmpCode) {
        case 'KB':
            result = num * kb;
            break;
        case 'MB':
            result = num * mb;
            break;
        case 'GB':
            result = num * gb;
            break;
    }
    return result;
};

const i18n = {
    cn: {
        messages: {
            'typeError' : "{file} 文件格式不正确。有效格式： {extensions}",
            'sizeError' : "{file} 文件容量超过限制, 文件最大容量为： {sizeLimit}",
            'minSizeError' : "{file} 文件容量低于限制, 上传的文件最小容量为： {minSizeLimit}.",
            'emptyError' : "{file} 文件为空，请选择其他文件进行上传。",
            'noFilesError' : "未选择任何文件进行上传",
            'tooManyItemsError' : "太多文件 ({netItems}) 需要被上传，上传文件数量限制为： {itemLimit}个",
            'maxHeightImageError' : "图片高度超过限制",
            'maxWidthImageError' : "图片宽度超过限制",
            'minHeightImageError' : "图片高度不足",
            'minWidthImageError' : "图片宽度不足",
            'retryFailTooManyItems' : "重试失败 - 您已达到文件数量上限。",
            'onLeave' : "文件正在上传，若离开该页面，正在上传的文件将被取消"
        },
        text: {
            'failUpload' : '上传失败',
            'fileInputTitle' : '选择文件进行上传'
        },
        ui: {
            thumbnail: '图片预览',
            choseFileButton: '选择文件',
            dropHere: '将文件拖到这里进行上传……',
            done: '完成',
            fileTypes: '文件类型',
            fileSizeLimit: '文件容量限制'
        }

    },
    en: {
        ui: {
            thumbnail: 'thumbnail',
            choseFileButton: 'select file',
            dropHere: 'drop files here',
            done: 'done',
            fileTypes: 'file extensions',
            fileSizeLimit: 'file size limit'
        }
    },
    es: {
    messages: {
      'typeError' : "El archivo \"{file}\" no tiene una extensión válida. Extensiones válidas： {extensions}",
      'sizeError' : "El tamaño del archivo  \"{file}\" excede el límite, la capacidad máxima permitida es： {sizeLimit}",
      'minSizeError' : "El tamaño del archivo \"{file}\" es inferiro al límite, el tamaño mínimo es： {minSizeLimit}.",
      'emptyError' : "El archivo \"{file}\" está vacío, seleccione otro archivo para subir.",
      'noFilesError' : "No has seleccionado ningún archivo.",
      'tooManyItemsError' : "No puedes subir más de {itemLimit} a la vez.",
      'maxHeightImageError' : "La altura de la imagen es superior al límite permitido.",
      'maxWidthImageError' : "La anchura de la imagen es superior al límite permitido.",
      'minHeightImageError' : "La altura de la imagen es inferior al mínimo permitido.",
      'minWidthImageError' : "La anchura de la imagen es inferior al mínimo permitido.",
      'retryFailTooManyItems' : "Reintento fallido: has alcanzado el máximo de archivos permitidos.",
      'onLeave' : "El archivo se está cargando. Si abandona esta página, la subida del archivo será cancelada."
    },
    text: {
      'failUpload' : 'Subida fallida',
      'fileInputTitle' : 'Selecciona un archivo'
    },
    ui: {
      thumbnail: 'Miniatura',
      choseFileButton: 'Selecciona un archivo/s',
      dropHere: 'Arrastra los archivos aquí ...',
      done: 'Hecho',
      fileTypes: 'Extensiones permitidas',
      fileSizeLimit: 'Peso máximo por archivo'
    }
  }
};

const buildOptions = function(){
    let p = {
        multiple: this.multiple,
        request: {
            endpoint: this.uploadFileUrl,
            inputName: this.uploadFileObjName,
            //server side validate file info
            params: {
                'fileSizeLimit': this.fileSizeLimit,
                'fileTypeExts': this.fileTypeExts
            }
        },
        deleteFile: {
            enabled: true,
            method: "POST"//,
            //'endpoint' : $webroot + 'upload/deleteUploadFile'
        },
        debug: true,
        validation: {
            allowedExtensions: this.fileTypeExts.split(','),
            sizeLimit: fileSize2Bytes(this.fileSizeLimit, true),
            sizeLimitStr: this.fileSizeLimit,
            image: {
                maxHeight: this.imageMaxHeight,
                maxWidth: this.imageMaxWidth,
                minHeight: this.imageMinHeight,
                minWidth: this.imageMinWidth
            }
        },
        callbacks: {
            //the callback when file upload finish
            onComplete: function(id,name,json,xhr){},
            //the callback before delete file, return false can stop it.
            onSubmitDelete: function(id){}
        }
    };
    if(this.language && this.language === 'cn'){
        p.messages = i18n.cn.messages;
        p.text = i18n.cn.text;
    }
    else if(this.language && this.language === 'es'){
        p.messages = i18n.es.messages;
        p.text = i18n.es.text;
    }
    if(this.callback && typeof this.callback === 'function'){
        p.callbacks.onComplete = (id,name,json,xhr) => {
            if(json) this.callback(json);
        };
    }
    return p;
}

const getI18n = function(language){
  if(language && typeof i18n[language].ui !== 'undefined'){
    return i18n[language].ui
  }

  return i18n.en.ui
}

export {buildOptions};
export {getI18n};
