package tn.esprit.bridge.Controlleur;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.bridge.Service.ICour;
import tn.esprit.bridge.entite.Cour;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/cour")
public class CourControlleur {

    private final ICour iCour;

    @PostMapping("/ajouter")
    public ResponseEntity<?> ajouterCour(
            @RequestParam String title,
            @RequestParam double price,
            @RequestParam("file") MultipartFile file
    ) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("Please select a file!", HttpStatus.BAD_REQUEST);
        }

        try {
            Cour savedCour = iCour.ajoutercour(title, price, file);
            return new ResponseEntity<>(savedCour, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to save Cour with image: " + e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




    @PutMapping("/modifier/{id}")
    public ResponseEntity<?> modifierCour(
            @PathVariable Long id,
            @RequestParam String title,
            @RequestParam double price,
            @RequestParam(value = "file", required = false) MultipartFile file
    ) {
        try {
            Cour modifiedCour = iCour.modifiercour(id, title, price, file);
            return new ResponseEntity<>(modifiedCour, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>("Cour not found with id: " + id, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to modify Cour: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/supprimer/{id}")
    public ResponseEntity<String> supprimerCour(@PathVariable Long id) {
        try {
            iCour.supprimerCour(id);
            return new ResponseEntity<>("Cour with ID: " + id + " has been deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete Cour with ID: " + id, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }





    @GetMapping("/all")
    public ResponseEntity<List<Cour>> getAllCour() {
        List<Cour> allCourses = iCour.getAllCour();
        return new ResponseEntity<>(allCourses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cour> getCourById(@PathVariable Long id) {
        Cour cour = iCour.getCourById(id);
        if (cour != null) {
            return new ResponseEntity<>(cour, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }






}
