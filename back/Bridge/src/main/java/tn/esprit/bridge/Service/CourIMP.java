package tn.esprit.bridge.Service;

import jakarta.persistence.EntityNotFoundException;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.bridge.entite.Cour;
import tn.esprit.bridge.repo.CourRepository;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

@Service
@Slf4j
public class CourIMP implements ICour{


    private final String pathFile="C:/images/";


    @Autowired
    private CourRepository courRepository;




    public String saveImageToStorage(MultipartFile imageFile) {
        try {
            String filename = imageFile.getOriginalFilename();
            String filePath = pathFile + filename;

            File convertFile = new File(filePath);
            convertFile.createNewFile();

            FileOutputStream fout = new FileOutputStream(convertFile);
            fout.write(imageFile.getBytes());
            fout.close();

            log.info("Image '{}' saved successfully at '{}'.", filename, filePath);
            return filePath; // Return the file path or any identifier you prefer for the saved image
        } catch (IOException e) {
            log.error("Failed to save the image '{}': {}", imageFile.getOriginalFilename(), e.getMessage());
            throw new RuntimeException("Failed to save the image: " + e.getMessage());
        }
    }


    @Override
    public Cour ajoutercour(String title, double price, MultipartFile image) {
        String imagePath = saveImageToStorage(image);
        Cour cour = new Cour();
        cour.setTitle(title);
        cour.setPrice(price);
        cour.setImage(imagePath);
        return courRepository.save(cour);
    }

    @Override
    public Cour modifiercour(Long id, String title, double price, MultipartFile image) {
        Cour existingCour = courRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cour not found with id: " + id));

        existingCour.setTitle(title);
        existingCour.setPrice(price);

        if (image != null && !image.isEmpty()) {
            String imagePath = saveImageToStorage(image);
            existingCour.setImage(imagePath);
        }

        return courRepository.save(existingCour);
    }





    @Override
    public List<Cour> getAllCour() {
        return courRepository.findAll();
    }

    @Override
    public Cour getCourById(Long id) {
        return courRepository.findById(id).orElse(null);
    }

    @Override
    public void supprimerCour(Long id) {

        courRepository.deleteById(id);


    }


}
