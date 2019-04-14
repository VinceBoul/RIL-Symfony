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
            ->add('name', null, ['label' => 'form.recette.label.name'])
            ->add('image', FileType::class, ['data_class' => null, 'label' => 'form.recette.label.image'])
            ->add('teaser', null, ['label' => 'form.recette.label.teaser'])
            ->add('heating_duration', null, ['label' => 'form.recette.label.heating_dur'])
            ->add('body', null, ['label' => 'form.recette.label.desc'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Recette::class,
        ]);
    }
}
