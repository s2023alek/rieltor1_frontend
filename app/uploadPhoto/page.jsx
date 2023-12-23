import UploadPhotoForm from '@/components/UploadPhotoForm';

export default async function Page() {
    return (
        <div style={{width:"100%", textAlign: "center"}}>
            <h3>Загрузка фотографий</h3>
            <UploadPhotoForm />
        </div>
    );
};
