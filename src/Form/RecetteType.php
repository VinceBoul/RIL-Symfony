<?php

namespace App\Form;

use App\Entity\Recette;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RecetteType extends AbstractType{



	public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('name', null, ['label' => 'form.recette.label.name'])
            ->add('image', FileType::class, [
				'label' => 'form.recette.label.image',
				'required' => false,
				'data' => 'uploads/recettes/'.$options['data']->getImage(),
				'data_class' => null
			])
            ->add('teaser', null, ['label' => 'form.recette.label.teaser'])
            ->add('heating_duration', null, ['label' => 'form.recette.label.heating_dur'])
            ->add('body', null, ['label' => 'form.recette.label.desc'])
			->add('ingredients', CollectionType::class, [
				'entry_type' => IngredientType::class,
				'entry_options' => ['label' => false],
				'allow_add' => true,
				'allow_delete' => true,
				'by_reference' => false,
			])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Recette::class,
        ]);
    }
}
