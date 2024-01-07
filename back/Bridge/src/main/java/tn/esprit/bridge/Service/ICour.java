package tn.esprit.bridge.Service;

import org.springframework.web.multipart.MultipartFile;
import tn.esprit.bridge.entite.Cour;

import java.util.List;

public interface ICour {
    public Cour ajoutercour(String title, double price, MultipartFile image);

    public Cour modifiercour(Long id, String title, double price, MultipartFile image);
    List<Cour> getAllCour();
    public Cour getCourById(Long id);
    public void supprimerCour(Long id);
    public String saveImageToStorage(MultipartFile imageFile) ;


    }
