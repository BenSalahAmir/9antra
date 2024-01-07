package tn.esprit.bridge.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.bridge.entite.Cour;
@Repository
public interface CourRepository extends JpaRepository<Cour,Long> {
}
