<?php

namespace App\Form;

use App\Entity\Recette;
use Doctrine\DBAL\Types\StringType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RecetteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, ['label' => 'Nom de la recette'])
            ->add('image', FileType::class, ['data_class' => null, 'label' => 'Image de la recette'])
            ->add('teaser', null, ['label' => 'Phrase d\'introduction de la recette'])
            ->add('heating_duration')
            ->add('body', null, ['label' => 'Description complète de la recette'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Recette::class,
        ]);
    }
}
